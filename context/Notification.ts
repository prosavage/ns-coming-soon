import NotificationContainer from "./NotificationContext";
import NotificationType from "./NotificationType";

interface Notification {
    type: NotificationType,
    message: string
}

export default Notification;