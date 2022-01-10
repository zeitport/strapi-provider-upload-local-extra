const {SubFolderOption} = require('./subFolderOption.js');

class PluginOptions {
    constructor() {
        /**
         * @type {number}
         */
        this.sizeLimit = 1000000;

        /**
         * @type {string}
         */
        this.publicDir = './public';

        /**
         * @type {SubFolderOption | string}
         */
        this.subFolder = SubFolderOption.off;

        /**
         * @type {() => string | null}
         */
        this.createUniqueId = null;
    }
}

module.exports = {PluginOptions};
