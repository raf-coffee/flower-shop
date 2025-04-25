import { twMerge } from "tailwind-merge";

export enum TextSize {
  EXTRA_SMALL = "text-xs md:text-sm lg:text-base",
  SMALL = "text-sm md:text-base lg:text-lg",
  NORMAL = "text-base md:text-lg lg:text-xl",
  LARGE = "text-lg md:text-xl lg:text-3xl",
  EXTRA_LARGE = "text-xl md:text-2xl lg:text-4xl",
}

export enum TextWeight {
  LIGHT = "font-light",
  NORMAL = "font-normal",
  BOLD = "font-bold",
}

export enum TextFont {
  MONTSERRAT = "font-montserrat",
  LATO = "font-lato",
}

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
    <p className={twMerge(size, weight, font, className)} {...props}>
      {children}
    </p>
  );
}
