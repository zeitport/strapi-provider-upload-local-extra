class StrapiFile {
    constructor() {
        this.name = '';
        this.alternativeText = '';
        this.caption = '';
        this.hash = '';
        this.ext = '';
        this.mime = '';
        this.size = 0;
        this.width = 0;
        this.height = 0;
        this.url = '';

        /**
         * @type {ArrayBuffer}
         */
        this.buffer = null;
    }
}

module.exports = {StrapiFile};
