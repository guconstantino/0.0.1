import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";
export interface TestProps {
  size?: "large" | "medium" | "small";
  TextContent: ReactNode;
  asChild?: boolean;
}

export function Test({ size = "medium", TextContent, asChild }: TestProps) {
  const Comp = asChild ? Slot : "span";
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
