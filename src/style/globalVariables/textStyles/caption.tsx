import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface CaptionProps {
  variant?: "Large Caption" | "Regular Caption";
  captionTextContent: ReactNode;
  asChild?: boolean;
}

export function TextCaption({
  variant = "Regular Caption",
  captionTextContent,
  asChild,
}: CaptionProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-small", {
          "font-bold text-nano": variant === "Large Caption",
          "font-regular text-nano": variant === "Regular Caption",
        })}
      >
        {captionTextContent}
      </Comp>
    </>
  );
}
