// import { clsx } from "clsx";
import { ReactNode } from "react";

// import from radix
import { Slot } from "@radix-ui/react-slot";

//import from Global Variables
import * as TextStyle01 from "../../style/globalVariables/textStyles/body";
import * as TextStyle02 from "../../style/globalVariables/textStyles/disclaimer";
import clsx from "clsx";

//Component Variables

//props
export interface AvatarProps {
  Size?: "Large" | "Medium" | "Small" | "Extra Small";
  Type?: "Square" | "Circle";
  avatarText: ReactNode;
  hasPicture?: boolean;
  bgImage: ReactNode;
  isEnable?: boolean;
  asChild?: boolean;
}

export function Avatar({
  Size = "Large",
  Type = "Circle",
  hasPicture = false,
  avatarText,
  // bgImage,
  isEnable = true,
  asChild,
}: AvatarProps) {
  const Comp = asChild ? Slot : "div";
  if (Size != "Extra Small" && hasPicture === false) {
    return (
      <>
        <Comp
          className={clsx(
            "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100",
            {
              "w-ExtraLarge h-ExtraLarge": Size === "Large",
              "w-Large h-large": Size === "Medium",
              "w-Medium h-Medium": Size === "Small",
              "rounded-Small ": Type === "Square",
              "rounded-Pill ": Type === "Circle",
              "opacity-Light ": isEnable === false,
            }
          )}
        >
          {TextStyle01.textBody({
            variant: "Bold Body",
            bodyTextContent: avatarText,
          })}
        </Comp>
      </>
    );
  } else if (Size != "Extra Small" && hasPicture === true) {
    return (
      <>
        <Comp
          className={clsx("bg-cover bg-avatar-picture", {
            "w-ExtraLarge h-ExtraLarge": Size === "Large",
            "w-Large h-Large": Size === "Medium",
            "w-Medium h-Medium": Size === "Small",
            "rounded-Small ": Type === "Square",
            "rounded-Pill ": Type === "Circle",
            "opacity-Light ": isEnable === false,
          })}
        ></Comp>
      </>
    );
  } else if (Size === "Extra Small" && hasPicture === false) {
    return (
      <>
        <Comp
          className={clsx(
            "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100",
            {
              "w-Small h-Small": Size === "Extra Small",
              "rounded-Small ": Type === "Square",
              "rounded-Pill ": Type === "Circle",
              "opacity-Light ": isEnable === false,
            }
          )}
        >
          {TextStyle02.TextDisclaimer({
            variant: "Regular Disclaimer",
            disclaimerTextContent: avatarText,
          })}
        </Comp>
      </>
    );
  } else if (Size === "Extra Small" && hasPicture === true) {
    return (
      <>
        <Comp
          className={clsx("bg-cover bg-avatar-picture", {
            "w-Small h-Small": Size === "Extra Small",
            "rounded-Small ": Type === "Square",
            "rounded-Pill ": Type === "Circle",
            "opacity-Light ": isEnable === false,
          })}
        ></Comp>
      </>
    );
  }
}
