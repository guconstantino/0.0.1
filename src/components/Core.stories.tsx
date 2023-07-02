import { Meta, StoryObj } from "@storybook/react";
import { Avatar, avatarProps } from "./Avatar/Avatar";

//Avatar
export default {
  title: "Core/ Avatar",
  component: Avatar, // Precisa ser o componente exportado
  args: {
    Text: "Aa",
  },
  argTypes: {
    Size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<avatarProps>;

export const Default: StoryObj<avatarProps> = {};
