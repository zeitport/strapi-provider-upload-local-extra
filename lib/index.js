'use strict';

const fs = require('fs-extra');
const path = require('path');
const {PayloadTooLargeError} = require('@strapi/utils').errors;
const {customAlphabet} = require('nanoid');
const {PluginOptions} = require('./pluginOptions.js');

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 32);

module.exports = {
    /**
     * @param {Partial<PluginOptions>} pluginOptions
     * @returns {{upload: ((function(*): Promise<void>)|*), delete: ((function(*): Promise<void>)|*)}}
     */
    init(pluginOptions = {}) {
        const options = {...new PluginOptions(), ...pluginOptions};
        options.createUniqueId = options.createUniqueId || nanoid;

        const publicDir = strapi.dirs.public;

        function verifySize(file) {
            if (file.size > options.sizeLimit) {
                throw new PayloadTooLargeError();
            }
        }

        async function uploadFile(file) {
            verifySize(file);
            console.log(file);

            const uniqueFileId = options.createUniqueId();
            const fileUrl = `/uploads/${uniqueFileId}${file.ext}`;
            const filePath = path.join(publicDir, fileUrl);

            await fs.writeFile(filePath, file.buffer);
            file.hash = uniqueFileId;
            file.url = fileUrl;
        }

        async function deleteFile(file) {
            console.log(file);
            const filePath = path.join(publicDir, `/uploads/${file.hash}${file.ext}`);
            await fs.unlink(filePath).catch(() => {});
        }

        return {
            upload: uploadFile,
            delete: deleteFile
        };
    },
};
