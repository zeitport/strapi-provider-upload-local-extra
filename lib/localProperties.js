const {customAlphabet, nanoId} = require('nanoid');
const createUniqueId = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 16);

class LocalProperties {
    /**
     * @param {StrapiFile} file
     */
    constructor(file) {
        /**
         * @type {StrapiFile}
         */
        this.file = file;

        /**
         * @type {nanoId}
         */
        this.nanoId = nanoId;
    }

    get hash() {
        return this.file.hash;
    }

    get ext() {
        return this.file.ext;
    }

    get uniqueId() {
        return createUniqueId();
    }
}

module.exports = {LocalProperties};
