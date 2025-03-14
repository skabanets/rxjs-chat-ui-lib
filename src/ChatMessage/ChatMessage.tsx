import React, { FC } from "react";
import "./ChatMessage.css";

interface ChatMessageProps {
  sender: "user" | "chatbot";
  text: string;
  unread: boolean;
  timestamp: string;
  onMessageClick?: () => void;
}

const ChatMessage: FC<ChatMessageProps> = ({
  sender,
  text,
  unread,
  timestamp,
  onMessageClick,
}) => {
  return (
    <li
      className={`message-item ${sender === "user" ? "user" : "chatbot"} ${
        unread ? "unread" : ""
      }`}
      onClick={onMessageClick}
    >
      <p>{text}</p>
      <p className={`timestamp ${sender === "user" ? "left" : "right"}`}>
        {timestamp}
      </p>
    </li>
  );
};

export default ChatMessage;
