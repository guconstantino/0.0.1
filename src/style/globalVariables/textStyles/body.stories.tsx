import { Meta, StoryObj } from "@storybook/react";
import { textBody, TextBodyProps } from "./body";

// // Body
export default {
  title: "Global Variables/Text Styles",
  component: textBody,
  argTypes: {
    variant: {
      options: ["Regular Body", "Medium Body", "Bold Body"],
      control: {
        type: "radio",
      },
    },
    bodyTextContent: {
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
} as Meta<TextBodyProps>;

export const Body: StoryObj<TextBodyProps> = {
  args: {
    bodyTextContent: "Olá, eu sou um Body",
  },
};
