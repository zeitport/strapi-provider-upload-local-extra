const {customAlphabet, nanoid} = require('nanoid');
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
         * @type {nanoid}
         */
        this.nanoid = nanoid;
    }

    /**
     * @returns {string}
     */
    get hash() {
        return this.file.hash;
    }

    /**
     * @returns {string}
     */
    get ext() {
        return this.file.ext;
    }

    /**
     * @returns {string}
     */
    get uniqueId() {
        return createUniqueId();
    }

    /**
     * @returns {string}
     */
    get sizeName() {
        let prefix = '';

        const sizeNames = ['thumbnail', 'small', 'medium', 'large'];

        for(const sizeName of sizeNames) {
            if (this.file.name.startsWith(sizeName)) {
                prefix = sizeName;
                break;
            }
        }

        return prefix;
    }
}

module.exports = {LocalProperties};
