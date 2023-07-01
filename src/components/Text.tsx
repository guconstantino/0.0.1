import clsx from "clsx";

interface TextProps {
  size?: "small" | "medium" | "large";
}

export function Heading({ size = "medium" }: TextProps) {
  return (
    <>
      <span
        className={clsx("text-Neutral900", {
          "text-extraLarge": size === "large",
          "text-large": size === "medium",
          "text-medium": size === "small",
        })}
      >
        Heading
      </span>
    </>
  );
}
