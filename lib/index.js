'use strict';

const fs = require('fs-extra');
const path = require('path');
const {PayloadTooLargeError} = require('@strapi/utils').errors;
const {UploadLocalExtraOptions} = require('./uploadLocalExtraOptions.js');
const {LocalProperties} = require('./localProperties.js');
const {encodePath} = require('./encodePath.js');

module.exports = {
    /**
     * @param {Partial<UploadLocalExtraOptions> | UploadLocalExtraOptions} providerOptions
     * @returns {{upload: ((function(StrapiFile): Promise<void>)), delete: ((function(StrapiFile): Promise<void>))}}
     */
    init(providerOptions = {}) {
        const options = {...new UploadLocalExtraOptions(), ...providerOptions};

        /**
         * @param {StrapiFile} file
         */
        function verifySize(file) {
            if (file.size > options.sizeLimit) {
                throw new PayloadTooLargeError();
            }
        }

        /**
         * @param {StrapiFile} file
         * @returns {Promise<void>}
         */
        async function uploadFile(file) {
            verifySize(file);

            const localProperties = new LocalProperties(file);
            const localPath = options.getLocalPath(localProperties);
            const filePath = `${options.cwd}/${localPath}`;

            await fs.ensureDir(path.dirname(filePath));
            await fs.writeFile(filePath, file.buffer);

            file.url = `/${options.encodeUrl ? encodePath(localPath) : localPath}`;
        }

        /**
         * @param {StrapiFile} file
         * @returns {Promise<void>}
         */
        async function deleteFile(file) {
            const filePath = `${options.cwd}${file.url}`;
            await fs.unlink(filePath).catch(() => {});
        }

        return {
            upload: uploadFile,
            delete: deleteFile
        };
    },
};
