import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface BodyProps {
  size?: "large" | "medium" | "small";
  TextContent: ReactNode;
  asChild?: boolean;
}

export function BodyStyle({
  size = "medium",
  TextContent,
  asChild,
}: BodyProps) {
  const Comp = asChild ? Slot : "p";
  return (
    <>
      <Comp
        className={clsx("font-bold", {
          "text-extraLarge": size === "large",
          "text-large": size === "medium",
          "text-medium": size === "small",
        })}
      >
        {TextContent}
      </Comp>
    </>
  );
}
