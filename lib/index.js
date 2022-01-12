'use strict';

const fs = require('fs-extra');
const {PayloadTooLargeError} = require('@strapi/utils').errors;
const {PluginOptions} = require('./pluginOptions.js');
const {LocalProperties} = require('./localProperties.js');

module.exports = {
    /**
     * @param {Partial<PluginOptions>} pluginOptions
     * @returns {{upload: ((function(*): Promise<void>)|*), delete: ((function(*): Promise<void>)|*)}}
     */
    init(pluginOptions = {}) {
        const options = {...new PluginOptions(), ...pluginOptions};

        function verifySize(file) {
            if (file.size > options.sizeLimit) {
                throw new PayloadTooLargeError();
            }
        }

        async function uploadFile(file) {
            verifySize(file);
            console.log(file);

            const localProperties = new LocalProperties(file);
            const localPath = options.getLocalPath(localProperties);
            const filePath = `${options.cwd}${localPath}`;

            await fs.writeFile(filePath, file.buffer);
            file.url = `${localPath}`;
        }

        async function deleteFile(file) {
            console.log(file);
            const filePath = `${options.cwd}${file.url}`;
            await fs.unlink(filePath).catch(() => {});
        }

        return {
            upload: uploadFile,
            delete: deleteFile
        };
    },
};
