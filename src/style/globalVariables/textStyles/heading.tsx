import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TextHeadingProps {
  variant?: "Large Heading" | "Medium Heading" | "Small Heading";
  headingTextContent: ReactNode;
  asChild?: boolean;
}

export function TextHeading({
  variant = "Large Heading",
  headingTextContent,
  asChild,
}: TextHeadingProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <>
      <Comp
        className={clsx({
          "leading-large font-bold text-extraLarge":
            variant === "Large Heading",
          "leading-large font-bold text-large": variant === "Medium Heading",
          "leading-large font-bold text-medium": variant === "Small Heading",
        })}
      >
        {headingTextContent}
      </Comp>
    </>
  );
}
1;
