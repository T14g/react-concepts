import React from 'react';
import useUserStatus from "../hooks/useUserStatus";

const FriendListItem = ({ item }) => {
    const status = useUserStatus(item.id)
    return (
        <li style={{ background: status === 'online' ? 'green' : 'red' }}>
            User with id {item.id} is {status};
        </li>
    );
}

export default FriendListItem;