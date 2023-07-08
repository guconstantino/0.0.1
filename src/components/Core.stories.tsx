import { Meta, StoryObj } from "@storybook/react";
import { Avatar, avatarProps } from "./Avatar/Avatar";

//Avatar

export default {
  title: "Core/ Avatar",
  component: Avatar, // Precisa ser o componente exportado
  args: {
    avatarText: "Aa",
  },
  argTypes: {
    Size: {
      options: ["Extra Small", "Small", "Medium", "Large"],
      control: {
        type: "inline-radio",
      },
    },
    avatarText: {
      control: {
        type: "text",
      },
    },
  },
} as Meta<avatarProps>;

export const Default: StoryObj<avatarProps> = {};

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
