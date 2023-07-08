import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface LinkProps {
  variant?: "Large Link" | "Medium Link" | "Small Link";
  linkTextContent: ReactNode;
  asChild?: boolean;
}

export function TextLink({
  variant = "Medium Link",
  linkTextContent,
  asChild,
}: LinkProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-medium underline", {
          "font-medium text-medium": variant === "Large Link",
          "font-medium text-extraSmallsmall": variant === "Medium Link",
          "font-bold text-nano": variant === "Small Link",
        })}
      >
        {linkTextContent}
      </Comp>
    </>
  );
}
