import { clsx } from "clsx";
import { ReactNode } from "react";

// import from radix
import { Slot } from "@radix-ui/react-slot";

//import from Global Variables
import * as body from "../../style/globalVariables/textStyles/body";

//props
export interface avatarProps {
  // size?: "large" | "medium" | "small";
  Text: ReactNode;
  asChild?: boolean;
}

export function Avatar({ asChild }: avatarProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <Comp className={clsx("font-bold", {})}>{Text}</Comp>
    </>
  );
}

// export default () => (
//   <Avatar.Root>
//     <Avatar.Image />
//     <Avatar.Fallback />
//   </Avatar.Root>
// );
