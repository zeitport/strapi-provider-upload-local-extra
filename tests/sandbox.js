const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');
const {createStrapiStub} = require('./creatStrapiStub.js');

chai.use(dirtyChai);
chai.use(sinonChai);

// Stub the global strapi object
createStrapiStub();

// Stub the file system calls
const fs = require('fs-extra');

sinon.stub(fs, 'writeFile').resolves();
sinon.stub(fs, 'unlink').resolves();

module.exports = {
    expect: chai.expect,
    sinon
};
