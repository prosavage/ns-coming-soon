import React, { useState } from "react";
import { createContainer } from "unstated-next";
import Notification from "./Notification";
import NotificationType from "./NotificationType";


const useNotification = () => {
    let [notif, setNotif] = useState<Notification>({ type: undefined, message: "" });

    const setNotification = (type: NotificationType, message: string) => {
        setNotif({ type, message })
        setTimeout(() => {
            setNotif({ type: undefined, message: "" })
        }, 3000);
    }
    return { notif, setNotification };
}
let NotificationContainer = createContainer(useNotification)


export default NotificationContainer;