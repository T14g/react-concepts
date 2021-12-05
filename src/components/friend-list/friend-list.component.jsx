import FriendListItem from "../friend-list-item/friend-list-item.component";

const FriendList = ({ list }) => {

    return (
        <ul>
            {
                list.length > 0 && list.map((item, index) => {
                    return (
                        <FriendListItem key={index} item={item} />
                    )
                })
            }
        </ul>
    );
}

export default FriendList;