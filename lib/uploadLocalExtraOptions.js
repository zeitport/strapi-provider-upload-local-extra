class UploadLocalExtraOptions {
    constructor() {
        /**
         * @type {number}
         */
        this.sizeLimit = 1000000;

        /**
         * @type {string}
         */
        this.cwd = strapi.dirs.public;

        /**
         * @type {function(LocalProperties): string}
         */
        this.getLocalPath = props => `uploads/${props.hash}${props.ext}`;

        /**
         * Encode URLs to deal with special characters in a filename.
         * @type {boolean}
         */
        this.encodeUrl = true;
    }
}

module.exports = {UploadLocalExtraOptions};
