import clsx from "clsx";

type TextProps = {
  size?: "small" | "normal" | "large";
  className?: string;
  children: React.ReactNode;
};

const textSize: Record<NonNullable<TextProps["size"]>, string> = {
  large: "m-0 text-xl md:text-2xl lg:text-4xl",
  normal: "m-0 text-lg md:text-xl lg:text-2xl",
  small: "m-0 text-base md:text-lg lg:text-xl",
};

export default function Text({
  size = "normal",
  className = "",
  children,
}: TextProps) {
  return <p className={clsx(textSize[size], className)}>{children}</p>;
}
