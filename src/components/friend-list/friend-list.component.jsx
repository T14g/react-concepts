import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";
import FriendListItem from "../friend-list-item/friend-list-item.component";

const FriendList = ({ list }) => {

    const theme = useContext(ThemeContext);
    console.log(theme);

    return (
        <ul style={{ background: theme.background, color: theme.color }}>
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