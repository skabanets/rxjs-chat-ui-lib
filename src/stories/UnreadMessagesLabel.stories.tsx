import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import UnreadMessagesLabel from "../UnreadMessagesLabel/UnreadMessagesLabel";

const meta: Meta<typeof UnreadMessagesLabel> = {
  title: "Components/UnreadMessagesLabel",
  component: UnreadMessagesLabel,
  tags: ["autodocs"],
};

export default meta;

export const UnreadMessagesLabelStatic: StoryObj<typeof UnreadMessagesLabel> = {
  args: {
    unreadCount: 0,
  },
};

export const UnreadMessagesLabelWithCounter: StoryObj<
  typeof UnreadMessagesLabel
> = {
  args: {
    unreadCount: 3,
  },
};

export const UnreadMessagesLabelWithCounterAndText: StoryObj<
  typeof UnreadMessagesLabel
> = {
  args: {
    unreadCount: 5,
    text: "Click any blurred message to mark all as read",
  },
};
