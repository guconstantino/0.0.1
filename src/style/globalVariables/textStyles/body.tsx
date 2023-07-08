import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";
export interface TextBodyProps {
  variant?: "Bold Body" | "Medium Body" | "Regular Body";
  bodyTextContent: ReactNode;
  asChild?: boolean;
}

export function textBody({
  variant = "Regular Body",
  bodyTextContent,
  asChild,
}: TextBodyProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-medium", "text-extraSmall", {
          "font-bold": variant === "Bold Body",
          "font-medium": variant === "Medium Body",
          "font-regular": variant === "Regular Body",
        })}
      >
        {bodyTextContent}
      </Comp>
    </>
  );
}
