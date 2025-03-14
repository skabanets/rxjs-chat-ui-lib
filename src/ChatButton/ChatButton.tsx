import React, { FC } from "react";
import "./ChatButton.css";

interface ChatButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
}

const ChatButton: FC<ChatButtonProps> = ({
  label,
  onClick,
  disabled = false,
  icon,
  className = "",
  variant = "primary",
}) => {
  let buttonClass = "";
  switch (variant) {
    case "secondary":
      buttonClass = "buttonSecondary";
      break;
    case "danger":
      buttonClass = "buttonDanger";
      break;
    case "primary":
    default:
      buttonClass = "buttonPrimary";
      break;
  }

  return (
    <button
      className={`button ${buttonClass} ${className} ${
        disabled ? "buttonDisabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {label} {icon && <span>{icon}</span>}
    </button>
  );
};

export default ChatButton;
