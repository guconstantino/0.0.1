import { Meta, StoryObj } from "@storybook/react";
import { TextSubtitle, SubtitleProps } from "./subtitle";

// // Subtitle
export default {
  title: "Global Variables/Text Styles",
  component: TextSubtitle,
  argTypes: {
    variant: {
      options: ["Small Subtitle", "Medium Subtitle", "Large Subtitle"],
      control: {
        type: "radio",
      },
    },
    subtitleTextContent: {
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
} as Meta<SubtitleProps>;

export const Subtitle: StoryObj<SubtitleProps> = {
  args: {
    subtitleTextContent: "Olá, eu sou um Subtitle",
  },
};
