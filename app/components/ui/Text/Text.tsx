import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export enum TextSize {
  EXTRA_SMALL = "EXTRA_SMALL",
  SMALL = "SMALL",
  NORMAL = "NORMAL",
  LARGE = "LARGE",
  EXTRA_LARGE = "EXTRA_LARGE",
}

export enum TextWeight {
  LIGHT = "LIGHT",
  NORMAL = "NORMAL",
  MEDIUM = "MEDIUM",
  SEMIBOLD = "SEMIBOLD",
  BOLD = "BOLD",
}

export enum TextFont {
  MONTSERRAT = "MONTSERRAT",
  LATO = "LATO",
}

const textStyles = cva("", {
  variants: {
    size: {
      [TextSize.EXTRA_SMALL]: "text-xs md:text-sm lg:text-base",
      [TextSize.SMALL]: "text-sm md:text-base lg:text-lg",
      [TextSize.NORMAL]: "text-base md:text-lg lg:text-xl",
      [TextSize.LARGE]: "text-lg md:text-xl lg:text-3xl",
      [TextSize.EXTRA_LARGE]: "text-xl md:text-2xl lg:text-4xl",
    },
    weight: {
      [TextWeight.LIGHT]: "font-light",
      [TextWeight.NORMAL]: "font-normal",
      [TextWeight.MEDIUM]: "font-medium",
      [TextWeight.SEMIBOLD]: "font-semibold",
      [TextWeight.BOLD]: "font-bold",
    },
    font: {
      [TextFont.MONTSERRAT]: "font-montserrat",
      [TextFont.LATO]: "font-lato",
    },
  },
  defaultVariants: {
    size: TextSize.NORMAL,
    weight: TextWeight.NORMAL,
    font: TextFont.MONTSERRAT,
  },
});

type TextProps = {
  size?: TextSize;
  weight?: TextWeight;
  font?: TextFont;
  className?: string;
  children: React.ReactNode;
};

export default function Text({
  size = TextSize.NORMAL,
  weight = TextWeight.NORMAL,
  font = TextFont.MONTSERRAT,
  className = "",
  children,
  ...props
}: TextProps) {
  return (
    <p
      className={twMerge(textStyles({ size, weight, font }), className)}
      {...props}
    >
      {children}
    </p>
  );
}
