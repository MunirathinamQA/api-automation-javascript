const usersApi = require('../../src/apis/reqres/users-api');
//const { env } = require('../../src/utils/env-utils');

let userId = 2;

describe(`Sample Test in ${process.env.API_URL}`, () => {
    it('Get User Details', async () => {
        const res = await usersApi.getUserByUserId(userId);
    })
})