import React, { useState } from "react";
import NotificationAlert from "./notification";

const NOTIFICATION_TIMER_MS = 2500;

export const useNotification = () => {
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const showNotification = (
    message: string,
    timer: number = NOTIFICATION_TIMER_MS
  ) => {
    setMessage(message);
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, timer);
  };

  const Notification = () => {
    return isVisible ? <NotificationAlert message={message} /> : <></>;
  };

  return { showNotification, Notification };
};
