import { Meta, StoryObj } from "@storybook/react";
import { TextCaption, CaptionProps } from "./Caption";

// // Caption
export default {
  title: "Global Variables/Text Styles",
  component: TextCaption,
  argTypes: {
    variant: {
      options: ["Regular Caption", "Large Caption"],
      control: {
        type: "radio",
      },
    },
    captionTextContent: {
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
} as Meta<CaptionProps>;

export const Caption: StoryObj<CaptionProps> = {
  args: {
    captionTextContent: "Olá, eu sou um Caption",
  },
};
