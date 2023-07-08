import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface TitleProps {
  variant?: "Large Title" | "Medium Title" | "Small Title";
  TitleTextContent: ReactNode;
  asChild?: boolean;
}

export function TitleStyle({
  variant = "Small Title",
  TitleTextContent,
  asChild,
}: TitleProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-medium", {
          "font-bold text-large": variant === "Large Title",
          "font-bold text-medium": variant === "Medium Title",
          "font-bold text-small": variant === "Small Title",
        })}
      >
        {TitleTextContent}
      </Comp>
    </>
  );
}
