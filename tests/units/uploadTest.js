const {expect, sinon} = require('../sandbox.js');

const plugin = require('../../lib/index.js');
const {PayloadTooLargeError} = require('@strapi/utils/lib/errors.js');

const fs = require('fs-extra');
const path = require('path');

sinon.stub(fs, 'writeFile').resolves();

describe('upload()', function () {
    const uniqueId = 'unique-id';

    /**
     * @type {Partial<PluginOptions>}
     */
    const testOptions = {
        createUniqueId: () => uniqueId
    };

    beforeEach(function () {
    });

    describe('file', function() {
        it('writes the file to disk', async function() {
            const {upload} = plugin.init(testOptions);
            const file = createTestImageFile();

            await upload(file);

            const expectedPath = path.normalize(`/uploads/${uniqueId}.jpeg`);
            expect(fs.writeFile.firstCall.args[0]).to.equal(expectedPath);
        });

        it('updates the "url" property of the file object', async function() {
            const {upload} = plugin.init(testOptions);
            const file = createTestImageFile();

            await upload(file);

            expect(file.url).to.deep.equal(`/uploads/${uniqueId}${file.ext}`);
        });

        it('updates the "hash" property with the file path', async function() {
            const {upload} = plugin.init(testOptions);
            const file = createTestImageFile();

            await upload(file);

            expect(file.hash).to.deep.equal(`${uniqueId}`);
        });
    });

    describe('with sizeLimit', function () {
        it('throws an error when the file is too large', async function () {
            const {upload} = plugin.init({sizeLimit: 10});
            const file = {
                size: 1000
            };

            const expectedError = new PayloadTooLargeError();
            await upload(file).catch(error => expect(error.name).to.deep.equal(expectedError.name));
        });
    });

    function createTestImageFile() {
        return {
            name: 'testImage',
            hash: '12356789',
            ext: '.jpeg'
        };
    }
});
