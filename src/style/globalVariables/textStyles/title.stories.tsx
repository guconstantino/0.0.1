import { Meta, StoryObj } from "@storybook/react";
import { TitleStyle, TitleProps } from "./title";

// // Title
export default {
  title: "Global Variables/Text Styles",
  component: TitleStyle,
  argTypes: {
    variant: {
      options: ["Small Title", "Medium Title", "Large Title"],
      control: {
        type: "radio",
      },
    },
    TitleTextContent: {
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
} as Meta<TitleProps>;

export const Title: StoryObj<TitleProps> = {
  args: {
    TitleTextContent: "Olá, eu sou um Title",
  },
};
