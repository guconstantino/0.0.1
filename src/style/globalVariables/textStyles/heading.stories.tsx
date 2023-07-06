import { Meta, StoryObj } from "@storybook/react";
import { HeadingStyle, HeadingProps } from "./heading";

export default {
  title: "Text Style/Heading",
  component: HeadingStyle, // Precisa ser o componente exportado
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
} as Meta<HeadingProps>;

export const Default: StoryObj<HeadingProps> = {};

// Para habilitar mais variações
// export const Medium: StoryObj<HeadingProps> = {};
// export const Small: StoryObj<HeadingProps> = {};

// export const CustomComponent: StoryObj<HeadingProps> = {
//   args: {
//     asChild: true,
//     TextContent: <p className="text-Primary500">Eu sou um paragráfo</p>,
//   },
//   argTypes: {
//     TextContent: {
//       // control: {
//       //   type: null,
//       // },
//       table: {
//         disable: true,
//       },
//     },
//   },
// };
