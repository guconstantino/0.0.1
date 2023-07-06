import { Meta, StoryObj } from "@storybook/react";
import { BodyStyle, BodyProps } from "./body";

export default {
  title: "Text Style/Body",
  component: BodyStyle, // Precisa ser o componente exportado
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
} as Meta<BodyProps>;

export const Default: StoryObj<BodyProps> = {};

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
