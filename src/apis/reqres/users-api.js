const restClient = require('../rest-client');
const { ReqresAPI } = require('../apis');
const logger = require('../../logger-factory')(__filename);

const register = async (payload) => {
    logger.info('Reqres registration:', payload);
    const res = await restClient.post(ReqresAPI.REGISTER, payload);
    return res;
};

const login = async (payload) => {
    logger.info('Reqres API login:', payload);
    const res = await restClient.post(ReqresAPI.LOGIN, payload);
    logger.info('Login success: %o', res);
    return res;
};

const getUserByUserId = async (userId) => {
    logger.info('Get User Details by User ID :', userId);
    const res = await restClient.get(ReqresAPI.GET_USER.replace('{userId}', userId));
    logger.info('Get user response : %o', res);
    return res;
};

const updateUser = async (userId, payload) => {
    logger.info('Update User Details by User ID :', payload);
    const res = await restClient.patch(ReqresAPI.UPDATE_USER.replace('{userId}', userId), payload);
    logger.info('Update user response: %o', res);
    return res;
};

const deleteUser = async (userId, payload) => {
    logger.info('Delete User Details by User ID :', payload);
    const res = await restClient.del(ReqresAPI.DELETE_USER.replace('{userId}', userId), payload);
    logger.info('Delete user response: %o', res);
    return res;
}

module.exports = {
    register,
    login,
    getUserByUserId,
    updateUser,
    deleteUser
}