// import { clsx } from "clsx";
import { ReactNode } from "react";

// import from radix
import { Slot } from "@radix-ui/react-slot";

//import from Global Variables
import * as TextStyle from "../../style/globalVariables/textStyles/body";
import clsx from "clsx";

//Component Variables

//props
export interface avatarProps {
  Size?: "Large" | "Medium" | "Small" | "Extra Small";
  Type?: "Square" | "Circle";
  Text: ReactNode;
  asChild?: boolean;
}

export function Avatar({ Size, Type, Text, asChild }: avatarProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <Comp
        className={clsx(
          "flex justify-center items-center p-Nano rounded-Small bg-Primary900 text-Neutral100 ",
          {
            "w-ExtraLarge h-ExtraLarge": Size === "Large",
            "w-Large h-large": Size === "Medium",
            "w-Medium h-Medium": Size === "Small",
            "w-Small h-small ": Size === "Extra Small",
          }
        )}
      >
        {TextStyle.BodyStyle({
          variant: "Bold Body",
          TextContent: Text,
        })}
      </Comp>
    </>
  );
}
