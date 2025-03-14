import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import ChatMessage from "../ChatMessage/ChatMessage";

const meta: Meta<typeof ChatMessage> = {
  title: "Components/ChatMessage",
  component: ChatMessage,
  tags: ["autodocs"],
};

export default meta;

export const UserMessage: StoryObj<typeof ChatMessage> = {
  args: {
    sender: "user",
    text: "Greetings! What commands do you have?",
    unread: false,
    timestamp: "16:00",
  },
};

export const ChatbotMessage: StoryObj<typeof ChatMessage> = {
  args: {
    sender: "chatbot",
    text: "Hello! How can I assist you today?",
    unread: false,
    timestamp: "16:11",
  },
};

export const ChatbotUnreadMessage: StoryObj<typeof ChatMessage> = {
  args: {
    sender: "chatbot",
    text: "Sorry, I didn’t understand that. Type /help for a list of available commands.",
    unread: true,
    timestamp: "16:22",
    onMessageClick: () => alert("Messages have been read"),
  },
};
