import { Meta, StoryObj } from "@storybook/react";
import { TextHeading, TextHeadingProps } from "./heading";

// // Heading
export default {
  title: "Global Variables/Text Styles",
  component: TextHeading,
  argTypes: {
    variant: {
      options: ["Small Heading", "Medium Heading", "Large Heading"],
      control: {
        type: "radio",
      },
    },
    headingTextContent: {
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
} as Meta<TextHeadingProps>;
export const Heading: StoryObj<TextHeadingProps> = {
  args: {
    headingTextContent: "Olá, eu sou um Heading",
  },
};
