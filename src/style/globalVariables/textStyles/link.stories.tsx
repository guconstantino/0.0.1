import { Meta, StoryObj } from "@storybook/react";
import { TextLink, LinkProps } from "./link";

// // Subtitle
export default {
  title: "Global Variables/Text Styles",
  component: TextLink,
  argTypes: {
    variant: {
      options: ["Small Link", "Medium Link", "Large Link"],
      control: {
        type: "radio",
      },
    },
    linkTextContent: {
      control: {
        type: "text",
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<LinkProps>;

export const Link: StoryObj<LinkProps> = {
  args: {
    linkTextContent: "Olá, eu sou um Subtitle",
  },
};
