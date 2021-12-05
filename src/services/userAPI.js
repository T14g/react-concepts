const users = [
    {
        'id': '1',
        'status': 'online'
    },
    {
        'id': '2',
        'status': 'offline'
    },
    {
        'id': '3',
        'status': 'online'
    }
];

const userStatus = (id) => {
    let status = null;

    users.forEach(user => {

        if (user.id === id) {
            status = user.status;
        }
    });

    return status === null ? 'User not found' : status;
};

const UserAPI = {
    userStatus: userStatus
};

export default UserAPI;