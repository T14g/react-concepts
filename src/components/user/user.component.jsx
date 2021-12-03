import useUserStatus from '../hooks/useUserStatus';

const User = ({ id }) => {
    const status = useUserStatus(id);

    return (
        <div>
            The user with id : {id} is {status};
        </div>
    );
}

export default User;