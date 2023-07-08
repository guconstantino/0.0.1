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
  avatarText: ReactNode;
  asChild?: boolean;
}

export function Avatar({
  Size = "Large",
  Type = "Circle",
  avatarText,
  asChild,
}: avatarProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <Comp
        className={clsx(
          "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100",
          {
            "w-ExtraLarge h-ExtraLarge": Size === "Large",
            "w-Large h-large": Size === "Medium",
            "w-Medium h-Medium": Size === "Small",
            "w-Small h-small ": Size === "Extra Small",
            "rounded-Small ": Type === "Square",
            "rounded-Pill ": Type === "Circle",
          }
        )}
      >
        {TextStyle.textBody({
          variant: "Bold Body",
          bodyTextContent: avatarText,
        })}
      </Comp>
    </>
  );
}
