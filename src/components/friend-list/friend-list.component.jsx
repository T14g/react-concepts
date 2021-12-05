import useUserStatus from "../hooks/useUserStatus";

const FriendList = ({ list }) => {

    return (
        <ul>
            {
                list.length > 0 && list.map((item, index) => {
                    const status = useUserStatus(item.id);

                    return (
                        <li key={index} style={{ background: item.status === 'online' ? 'green' : 'red' }}>
                            User with id {item.id} is {status};
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default FriendList;