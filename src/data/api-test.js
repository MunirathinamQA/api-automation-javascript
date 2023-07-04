const inputData = {
    userId: 2,
    deleteUserId: 12,
    userRegistration: {
        email: 'automation_test@reqres.in',
        password: 'test@123'
    },
    userLogin: {
        email: 'michael.lawson@reqres.in',
        password: 'test12345'
    },
    updateUser: {
        name: 'Automation',
        job: 'Software Testing'
    }
};

const expectedData = {
    userDetails: {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg'
    }
}

module.exports = {
    inputData,
    expectedData
}