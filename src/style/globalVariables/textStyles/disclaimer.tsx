import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface DisclaimerProps {
  variant?: "Large Disclaimer" | "Regular Disclaimer";
  disclaimerTextContent: ReactNode;
  asChild?: boolean;
}

export function TextDisclaimer({
  variant = "Regular Disclaimer",
  disclaimerTextContent,
  asChild,
}: DisclaimerProps) {
  const Comp = asChild ? Slot : "span";
  return (
    <>
      <Comp
        className={clsx("leading-small", {
          "font-bold text-quark": variant === "Large Disclaimer",
          "font-regular text-quark": variant === "Regular Disclaimer",
        })}
      >
        {disclaimerTextContent}
      </Comp>
    </>
  );
}
