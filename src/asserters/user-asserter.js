const chai = require('chai');
const { expectedData } = require('../data/api-test');

const userUtils = require('../utils/user-utils');

const { expect } = chai;
const should = chai.should();

const assertLoginResponse = async (data) => {
    should.exist(data.token);
}

const assertUserDetails = async (actualData, expectedData) => {
    const actData = await userUtils.getUserDetails(actualData);
    expect(actData).to.deep.equal(expectedData);
}

const assertUpdatedUserDetails = async (actualData, expectedData) => {
    should.exist(actualData.updatedAt);
    const actData = await userUtils.getUpdatedUserDetails(actualData);
    expect(actData).to.deep.equal(expectedData);
}

module.exports = { 
    assertLoginResponse,
    assertUserDetails,
    assertUpdatedUserDetails
}