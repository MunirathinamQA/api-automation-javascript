const resClient = require('../rest-client');
const { ReqresAPI } = require('../apis');
const logger = require('../../logger-factory')(__filename);

const getUserByUserId = async (userId) => {
    logger.info('Get User Details by User ID :', userId);
    const res = await resClient.get(ReqresAPI.GET_USER.replace('{userId}', userId));
    logger.info('Get user response : %o', res);
    return res;
};

module.exports = {
    getUserByUserId
}