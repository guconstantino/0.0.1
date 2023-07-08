import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface SubtitleProps {
  variant?: "Large Subtitle" | "Medium Subtitle" | "Small Subtitle";
  subtitleTextContent: ReactNode;
  asChild?: boolean;
}

export function TextSubtitle({
  variant = "Small Subtitle",
  subtitleTextContent,
  asChild,
}: SubtitleProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-medium", {
          "font-medium text-medium": variant === "Large Subtitle",
          "font-medium text-small": variant === "Medium Subtitle",
          "font-regular text-extraSmall": variant === "Small Subtitle",
        })}
      >
        {subtitleTextContent}
      </Comp>
    </>
  );
}
