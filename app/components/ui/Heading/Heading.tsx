import { ElementType } from "react";
import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
};

const levelStyles: Record<number, string> = {
  1: "font-bold text-2xl md:text-3xl lg:text-5xl",
  2: "font-bold text-xl md:text-2xl lg:text-4xl",
  3: "font-semibold text-lg md:text-xl lg:text-2xl",
  4: "font-medium text-md md:text-lg lg:text-xl",
  5: "font-medium",
  6: "font-normal",
};

export default function Heading({
  level = 1,
  className = "",
  children,
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return <Tag className={clsx(levelStyles[level], className)}>{children}</Tag>;
}
