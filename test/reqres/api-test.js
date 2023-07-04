const usersApi = require('../../src/apis/reqres/users-api');
const data = require('../../src/data/api-test');
const userAsserter = require('../../src/asserters/user-asserter')
//Enable below line for Mac and replace process.env.API_URL to env on line no 8
//const { env } = require('../../src/utils/env-utils');

describe(`Sample Test in ${process.env.API_URL}`, () => {
    it('Register with new user', async () => {
        const res = await usersApi.register(data.inputData.userRegistration);
    });

    it('Login', async () => {
        const res = await usersApi.login(data.inputData.userLogin);
        await userAsserter.assertLoginResponse(res.data);
    });

    it('Get User Details', async () => {
        const res = await usersApi.getUserByUserId(data.inputData.userId);
        await userAsserter.assertUserDetails(res.data.data, data.expectedData.userDetails);
    });

    it('Update User Details', async () => {
        const res = await usersApi.updateUser(data.inputData.userId, data.inputData.updateUser);
        await userAsserter.assertUpdatedUserDetails(res.data, data.inputData.updateUser);
    });

    //Don't execute this test case just added for example purpose only
    it.skip('Delete User Details', async () => {
        const res = await usersApi.deleteUser(data.inputData.deleteUserId);
    })
});