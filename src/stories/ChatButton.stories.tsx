import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IoSend } from "react-icons/io5";

import ChatButton from "../ChatButton/ChatButton";

const meta: Meta<typeof ChatButton> = {
  title: "Components/ChatButton",
  component: ChatButton,
  tags: ["autodocs"],
};

export default meta;

export const SendButton: StoryObj<typeof ChatButton> = {
  args: {
    label: "",
    onClick: () => alert("Button clicked"),
    icon: <IoSend style={{ width: 24, height: 24 }} />,
    variant: "primary",
  },
};

export const DisabledSendButton: StoryObj<typeof ChatButton> = {
  args: {
    label: "",
    onClick: () => alert("Button clicked"),
    icon: <IoSend style={{ width: 24, height: 24 }} />,
    variant: "primary",
    disabled: true,
  },
};

export const ReadAllButton: StoryObj<typeof ChatButton> = {
  args: {
    label: "Read All",
    onClick: () => alert("Button clicked"),
    variant: "secondary",
  },
};

export const ClearHistoryButton: StoryObj<typeof ChatButton> = {
  args: {
    label: "Clear History",
    onClick: () => alert("Button clicked"),
    variant: "danger",
  },
};
