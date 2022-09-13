import React from "react";
import { NotificationAlertStyled, Message } from "./notification-styled";

interface NotificationProps {
  message: string;
}

const NotificationAlert = ({ message }: NotificationProps) => {
  return (
    <NotificationAlertStyled>
      <Message>{message}</Message>
    </NotificationAlertStyled>
  );
};

export default NotificationAlert;
