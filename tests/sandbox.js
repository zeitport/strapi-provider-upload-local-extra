const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const dirtyChai = require('dirty-chai');
const {createStrapiStub} = require('./creatStrapiStub.js');

chai.use(dirtyChai);
chai.use(sinonChai);

createStrapiStub();

module.exports = {
    expect: chai.expect,
    sinon
};
