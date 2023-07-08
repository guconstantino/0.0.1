import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface LinkProps {
  variant?: "Large Link" | "Medium Link" | "Small Link";
  linkTextContent: ReactNode;
  linkUrl: ReactNode;
  asChild?: boolean;
  //onCancelAction?: () = void
  //onSubmitAction?• 0) a void
}

export function TextLink({
  variant = "Medium Link",
  linkTextContent,
  linkUrl,
  asChild,
}: LinkProps) {
  const Comp = asChild ? Slot : "a";
  return (
    <>
      <Comp
        className={clsx("leading-medium underline", {
          "font-medium text-medium": variant === "Large Link",
          "font-medium text-extraSmallsmall": variant === "Medium Link",
          "font-bold text-nano": variant === "Small Link",
        })}
        href={`${linkUrl}`}
      >
        {linkTextContent}
      </Comp>
    </>
  );
}
