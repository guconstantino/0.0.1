import { Meta, StoryObj } from "@storybook/react";
import { TextDisclaimer, DisclaimerProps } from "./disclaimer";

// // Disclaimer
export default {
  title: "Global Variables/Text Styles",
  component: TextDisclaimer,
  argTypes: {
    variant: {
      options: ["Regular Disclaimer", "Large Disclaimer"],
      control: {
        type: "radio",
      },
    },
    disclaimerTextContent: {
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
} as Meta<DisclaimerProps>;

export const Disclaimer: StoryObj<DisclaimerProps> = {
  args: {
    disclaimerTextContent: "Olá, eu sou um Disclaimer",
  },
};
