# strapi-provider-upload-local-extra

This Strapi `upload` plugin has extra options to customize how uploads should be stored on the local file system.

## 🌵 ALPHA version, use at your own risk


## Configurations

| Property      | Type   | Description                                                                                                             |
|:--------------|:-------|:------------------------------------------------------------------------------------------------------------------------|
| sizeLimit     | number | Does not write the file to disk, when the file is too large.<br/> Throws a PayloadTooLargeError.<br/>_Default_: 1000000 |   
| publicDir     | string | The public directory to store the files.<br/>Default: Uses the strapi public directory.                                 |

## Links

- [Strapi local provider plugin](https://www.npmjs.com/package/strapi-provider-upload-local)
- [Strapi website](https://strapi.io/)
