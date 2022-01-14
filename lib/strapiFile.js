class StrapiFile {
    constructor() {
        /**
         * @type {string}
         */
        this.name = '';

        /**
         * @type {string}
         */
        this.alternativeText = '';

        /**
         * @type {string}
         */
        this.caption = '';

        /**
         * @type {string}
         */
        this.hash = '';

        /**
         * @type {string}
         */
        this.ext = '';

        /**
         * @type {string}
         */
        this.mime = '';

        /**
         * @type {number}
         */
        this.size = 0;

        /**
         * @type {number}
         */
        this.width = 0;

        /**
         * @type {number}
         */
        this.height = 0;

        /**
         * @type {string | undefined}
         */
        this.url = '';

        /**
         * @type {ArrayBuffer}
         */
        this.buffer = null;
    }
}

module.exports = {StrapiFile};
