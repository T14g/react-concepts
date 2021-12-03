import { useState, useEffect } from "react";
import UserAPI from "../../../services/userAPI";

//Custom Hook para usar a lógica do userStatus em qualquer componente que necessite
const useUserStatus = (userID) => {

    const [isOnline, setIsOnline] = useState(null);

    const handleStatusChange = (status) => setIsOnline(status);

    useEffect(() => {
        const status = UserAPI.userStatus(userID);
        console.log(status);
        if (status === 'online') {
            handleStatusChange('online');
        } else {
            handleStatusChange('offline');
        }
    });

    return isOnline;

}

export default useUserStatus;