import { Meta, StoryObj } from "@storybook/react";
import { Test, TestProps } from "./Test";

export default {
  title: "Text Style/Heading",
  component: Test, // Precisa ser o componente exportado
  args: {
    TextContent: "Olá, eu sou um Header",
  },
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TestProps>;

export const Default: StoryObj<TestProps> = {};

// Para habilitar mais variações
// export const Medium: StoryObj<TestProps> = {};
// export const Small: StoryObj<TestProps> = {};

export const CustomComponent: StoryObj<TestProps> = {
  args: {
    asChild: true,
    TextContent: <p className="text-Primary500">Eu sou um paragráfo</p>,
  },
  argTypes: {
    TextContent: {
      // control: {
      //   type: null,
      // },
      table: {
        disable: true,
      },
    },
  },
};
