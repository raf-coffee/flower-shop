import { twMerge } from "tailwind-merge";

export enum TextSize {
  SMALL = "text-sm",
  NORMAL = "text-base",
  LARGE = "text-lg",
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
