class PluginOptions {
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
    }
}

module.exports = {PluginOptions};
