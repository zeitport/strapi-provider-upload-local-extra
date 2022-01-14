const path = require('path');

/**
 * @param {string} pathLike
 */
function encodePath(pathLike) {
    const posixPathLike = path.posix.normalize(pathLike.replace(/\\/g,'/'));
    return posixPathLike.split('/').map(encodeURIComponent).join('/');
}

module.exports = {encodePath};
