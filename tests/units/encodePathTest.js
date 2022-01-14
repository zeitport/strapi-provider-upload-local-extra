const {expect} = require('../sandbox.js');

const {encodePath} = require('../../lib/encodePath.js');

describe('encodePath()', function () {
    it('returns an URL encoded string for a filename', function () {
        const path = 'file&bad=true.png';

        const encodedPath = encodePath(path);

        const expected = 'file%26bad%3Dtrue.png';
        expect(encodedPath).to.deep.equal(expected);
    });

    it('returns an URL encoded string for a path', function () {
        const path = '/test/&special/file&bad=true.png';

        const encodedPath = encodePath(path);

        const expected = '/test/%26special/file%26bad%3Dtrue.png';
        expect(encodedPath).to.deep.equal(expected);
    });

    it('returns an URL encoded string for a dirty path', function () {
        const dirtyPath = '\\\\test/&special\\file&bad=true.png';

        const encodedPath = encodePath(dirtyPath);

        const expected = '/test/%26special/file%26bad%3Dtrue.png';
        expect(encodedPath).to.deep.equal(expected);
    });
});
