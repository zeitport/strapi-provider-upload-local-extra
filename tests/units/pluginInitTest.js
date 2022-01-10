const {expect} = require('../sandbox.js');

const plugin = require('../../lib/index.js');

describe('plugin.init()', function () {
    it('returns an object with an upload function', function () {
        const obj = plugin.init();

        expect(typeof obj.upload).to.equal('function');
    });

    it('returns an object with an delete function', function () {
        const obj = plugin.init();

        expect(typeof obj.delete).to.equal('function');
    });
});
