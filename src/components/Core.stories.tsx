import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "./Avatar/Avatar";

//Avatar

export default {
  title: "Core/ Avatar",
  component: Avatar, // Precisa ser o componente exportado
  argTypes: {
    Size: {
      options: ["Extra Small", "Small", "Medium", "Large"],
      control: {
        type: "select",
      },
    },
    Type: {
      control: {
        type: "inline-radio",
      },
    },
    avatarText: {
      control: {
        type: "text",
      },
      table: {
        disable: true, //Exibir input de texto
      },
    },
    hasPicture: {
      control: "boolean",
      defaultValue: true,
      name: "Has Picture?",
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<AvatarProps>;

export const Default: StoryObj<AvatarProps> = {
  args: {
    avatarText: "Aa",
  },
};
