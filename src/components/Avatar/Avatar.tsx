import { clsx } from "clsx";
import { ReactNode } from "react";

// import from radix
import * as AvatarRadix from "@radix-ui/react-avatar";
import { Slot } from "@radix-ui/react-slot";

//props
export interface avatarProps {
  size?: "large" | "medium" | "small";
  Text: ReactNode;
  asChild?: boolean;
}

export function Avatar({ size = "medium", Text, asChild }: avatarProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <Comp
        className={clsx("font-bold", {
          "text-extraLarge": size === "large",
          "text-large": size === "medium",
          "text-medium": size === "small",
        })}
      >
        {Text}
      </Comp>
    </>
  );
}

// export default () => (
//   <Avatar.Root>
//     <Avatar.Image />
//     <Avatar.Fallback />
//   </Avatar.Root>
// );
