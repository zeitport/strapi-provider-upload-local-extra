const {expect} = require('../sandbox.js');

const provider = require('../../lib/index.js');

describe('provider.init()', function () {
    it('returns an object with an upload function', function () {
        const obj = provider.init();

        expect(typeof obj.upload).to.equal('function');
    });

    it('returns an object with an delete function', function () {
        const obj = provider.init();

        expect(typeof obj.delete).to.equal('function');
    });
});
