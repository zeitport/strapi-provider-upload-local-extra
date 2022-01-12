[![NPM version](https://img.shields.io/npm/v/strapi-provider-upload-local-extra.svg)](https://www.npmjs.com/package/strapi-provider-upload-local-extra)
[![Strapi](https://img.shields.io/badge/strapi-%3E4.0.0-blue?style=flat-square)](https://strapi.io/)
[![CI status](https://github.com/zeitport/strapi-provider-upload-local-extra/workflows/CI/badge.svg?branch=main&event=push)](https://github.com/zeitport/strapi-provider-upload-local-extra/actions?query=workflow%3ACI)
[![CodeQL](https://github.com/zeitport/strapi-provider-upload-local-extra/workflows/CodeQL/badge.svg)](https://github.com/zeitport/strapi-provider-upload-local-extra/actions?query=workflow%3ACodeQL)
[![Downloads](https://img.shields.io/npm/dm/strapi-provider-upload-local-extra.svg)](https://www.npmjs.com/package/strapi-provider-upload-local-extra)

# strapi-provider-upload-local-extra

This Strapi `upload` provider has extra options to customize how uploads should be stored on the local file system.

## Precondition
This provider plugin requires a __strapi__ version `>4.0.0`

## Installation

```cli
npm install strapi-provider-upload-local-extra
```


## Configuration

### Strapi

This provider plugin needs to be configured in this file: `./config/plugins.js`.

For example:

```js
module.exports = ({ env }) => ({
    upload: {
        config: {
            provider: 'strapi-provider-upload-local-extra',
            providerOptions: /** @type {UploadLocalExtraOptions} */({
                /**
                 * @param {LocalProperties} props
                 * @returns string
                 */
                getLocalPath: props => `uploads/${props.hash}${props.ext}`
            })
        }
    }
});
```

💡 The [JsDoc] type annotation `@type {...}` is _optional_, when used editors can provide code completion for an easy configuration.


### UploadLocalExtraOptions

| Property      | Type                         | Description                                                                                                             |
|:--------------|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------|
| sizeLimit     | `number`                     | Does not write the file to disk, when the file is too large.<br/> Throws a PayloadTooLargeError.<br/>_Default_: 1000000 |   
| getLocalPath  | `LocalProperties => string`  | The public directory to store the files.<br/>Default: Uses the strapi public directory.                                 |

### LocalProperties

| Property | Type         | Description                                                                   |
|:---------|:-------------|:------------------------------------------------------------------------------|
| file     | `StrapiFile` | The original Strapi file object passed to the `update` and `delete` function. |   
| hash     | `string`     | The file hash. Same as `props.file.hash`.                                     |     
| ext      | `string`   | The file extendsion. Same as `props.file.ext`.                                |
| uniqueId | `string` | A unique id with 16 characters (0-9, A-Z, a-z) using nanoid                   |   
| sizeName | `string` | The image size as name of ('thumbnail', 'small', 'medium', 'large')           |


## Links

- [Strapi local provider plugin](https://www.npmjs.com/package/strapi-provider-upload-local)
- [Strapi website](https://strapi.io/)

[JsDoc]: <https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html> "JsDoc Reference" 
