'use strict';

function createStrapiStub() {
    global.strapi = {
        dirs: {
            public: '/'
        }
    };
}

module.exports = {createStrapiStub};
