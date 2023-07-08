// // import { clsx } from "clsx";
// import { ReactNode } from "react";

// // import from radix
// import { Slot } from "@radix-ui/react-slot";

// //import from Global Variables
// import * as TextStyle01 from "../../style/globalVariables/textStyles/body";
// import * as TextStyle02 from "../../style/globalVariables/textStyles/disclaimer";
// import clsx from "clsx";

// //Component Variables

// //props
// export interface avatarProps {
//   Size?: "Large" | "Medium" | "Small" | "Extra Small";
//   Type?: "Square" | "Circle";
//   avatarText: ReactNode;
//   hasPicture?: boolean;
//   asChild?: boolean;
// }

// // export function avatarText({ Size }: avatarProps) {
// //   const value = TextStyle01.textBody;
// //   if (Size==='Extra Small'){

// //   }
// // }

// export function Avatar({
//   Size = "Large",
//   Type = "Circle",
//   hasPicture = false,
//   avatarText,
//   asChild,
// }: avatarProps) {
//   const Comp = asChild ? Slot : "div";

//   if (Size != "Extra Small" && hasPicture === false) {
//     return (
//       <>
//         <Comp
//           className={clsx(
//             "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100",
//             {
//               "w-ExtraLarge h-ExtraLarge": Size === "Large",
//               "w-Large h-large": Size === "Medium",
//               "w-Medium h-Medium": Size === "Small",
//               "rounded-Small ": Type === "Square",
//               "rounded-Pill ": Type === "Circle",
//             }
//           )}
//         >
//           {TextStyle01.textBody({
//             variant: "Bold Body",
//             bodyTextContent: avatarText,
//           })}
//         </Comp>
//       </>
//     );
//   } else if (Size != "Extra Small" && hasPicture === true) {
//     return (
//       <>
//         <Comp
//           className={clsx("bg-avatar-picture bg-cover", {
//             "w-ExtraLarge h-ExtraLarge": Size === "Large",
//             "w-Large h-Large": Size === "Medium",
//             "w-Medium h-Medium": Size === "Small",
//             "rounded-Small ": Type === "Square",
//             "rounded-Pill ": Type === "Circle",
//           })}
//         ></Comp>
//       </>
//     );
//   } else if (Size === "Extra Small" && hasPicture === false) {
//     return (
//       <>
//         <Comp
//           className={clsx(
//             "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100",
//             {
//               "w-Small h-Small": Size === "Extra Small",
//               "rounded-Small ": Type === "Square",
//               "rounded-Pill ": Type === "Circle",
//             }
//           )}
//         >
//           {TextStyle02.TextDisclaimer({
//             variant: "Regular Disclaimer",
//             disclaimerTextContent: avatarText,
//           })}
//         </Comp>
//       </>
//     );
//   } else if (Size === "Extra Small" && hasPicture === true) {
//     return (
//       <>
//         <Comp
//           className={clsx("bg-avatar-picture bg-cover", {
//             "w-Small h-Small": Size === "Extra Small",
//             "rounded-Small ": Type === "Square",
//             "rounded-Pill ": Type === "Circle",
//           })}
//         ></Comp>
//       </>
//     );
//   }
// }

import { ReactNode } from "react";
import clsx from "clsx";
import { Slot } from "@radix-ui/react-slot";
import * as TextStyle01 from "../../style/globalVariables/textStyles/body";
import * as TextStyle02 from "../../style/globalVariables/textStyles/disclaimer";

export interface AvatarProps {
  Size?: "Large" | "Medium" | "Small" | "Extra Small";
  Type?: "Square" | "Circle";
  avatarText: ReactNode;
  hasPicture?: boolean;
  asChild?: boolean;
}

export function Avatar({
  Size = "Large",
  Type = "Circle",
  hasPicture = false,
  avatarText,
  asChild,
}: AvatarProps) {
  const Comp = asChild ? Slot : "div";
  const isExtraSmall = Size === "Extra Small";
  const isLarge = Size === "Large";
  const isSquare = Type === "Square";
  const isCircle = Type === "Circle";
  const hasBackgroundImage = hasPicture && !isExtraSmall;

  return (
    <>
      <Comp
        className={clsx(
          {
            "flex justify-center items-center p-Nano bg-Primary900 !text-Neutral100":
              !hasBackgroundImage,
            "bg-avatar-picture bg-cover": hasBackgroundImage,
          },
          {
            "w-ExtraLarge h-ExtraLarge": isLarge,
            "w-Large h-Large": Size === "Medium",
            "w-Medium h-Medium": Size === "Small" && !isExtraSmall,
            "w-Small h-Small": isExtraSmall,
            "rounded-Small": isSquare,
            "rounded-Pill": isCircle,
          }
        )}
      >
        {hasBackgroundImage
          ? null
          : isExtraSmall
          ? TextStyle02.TextDisclaimer({
              variant: "Regular Disclaimer",
              disclaimerTextContent: avatarText,
            })
          : TextStyle01.textBody({
              variant: "Bold Body",
              bodyTextContent: avatarText,
            })}
      </Comp>
    </>
  );
}
