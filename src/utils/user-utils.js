const _ = require('lodash');

const getUserDetails = async (userDetails) => _.pick(userDetails, [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
])

const getUpdatedUserDetails = async (userDetails) => _.pick(userDetails, [
    'name',
    'job'
])

module.exports = { 
    getUserDetails,
    getUpdatedUserDetails
}