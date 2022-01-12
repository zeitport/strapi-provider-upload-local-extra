const {expect} = require('../sandbox.js');

const plugin = require('../../lib/index.js');
const fs = require('fs-extra');

describe('delete()', function () {

    beforeEach(function () {
    });

    describe('file', function() {
        it('unlinks the file', async function() {
            const api = plugin.init();
            const file = createTestImageFile();

            await api.upload(file);
            await api.delete(file);
            const expectedPath = `./uploads/${file.hash}${file.ext}`;
            expect(fs.unlink.firstCall.args[0]).to.equal(expectedPath);
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
