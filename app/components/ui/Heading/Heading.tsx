import { ElementType } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4;
  className?: string;
  children: React.ReactNode;
};

const headingStyles = cva("", {
  variants: {
    level: {
      1: "font-bold text-2xl md:text-3xl lg:text-5xl",
      2: "font-bold text-xl md:text-2xl lg:text-4xl",
      3: "font-semibold text-lg md:text-xl lg:text-2xl",
      4: "font-medium text-md md:text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

export default function Heading({
  level = 1,
  className = "",
  children,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={twMerge(headingStyles({ level }), className)} {...props}>
      {children}
    </Tag>
  );
}
