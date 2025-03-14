import React, { FC } from "react";
import { IoIosNotifications } from "react-icons/io";
import "./UnreadMessagesLabel.css";

interface UnreadMessagesLabelProps {
  unreadCount: number;
  text: string;
}

const UnreadMessagesLabel: FC<UnreadMessagesLabelProps> = ({
  unreadCount,
  text,
}) => {
  return (
    <div className="unread-label">
      {unreadCount > 0 && text && <p className="unread-label__text">{text}</p>}
      <div className="unread-label__icon">
        <IoIosNotifications size={32} />
        {unreadCount > 0 && (
          <span className="unread-label__badge">{unreadCount}</span>
        )}
      </div>
    </div>
  );
};

export default UnreadMessagesLabel;
