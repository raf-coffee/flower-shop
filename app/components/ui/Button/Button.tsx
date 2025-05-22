import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Text, { TextFont, TextSize, TextWeight } from "../Text";

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<"button">;

const buttonVariants = cva(
  "rounded-full font-semibold text-white transition duration-300 py-2",
  {
    variants: {
      variant: {
        primary: "bg-secondary-pink hover:bg-hover-pink active:bg-active-pink",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
        false: "cursor-pointer",
      },
      size: {
        large: "w-[100px] lg:w-[275px] px-6",
        normal: "w-[72px] lg:w-[140px] px-5 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "normal",
      disabled: false,
    },
  },
);

export default function Button({
  className,
  children,
  disabled = false,
  variant = "primary",
  size = "normal",
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        buttonVariants({ variant, disabled, size }),
        className,
      )}
      {...rest}
    >
      {size === "normal" ? (
        <Text
          font={TextFont.LATO}
          size={TextSize.SMALL}
          weight={TextWeight.SEMIBOLD}
          className="text-[8px] tracking-wider"
        >
          {children}
        </Text>
      ) : (
        <Text
          font={TextFont.MONTSERRAT}
          size={TextSize.NORMAL}
          weight={TextWeight.BOLD}
          className="tracking-wide"
        >
          {children}
        </Text>
      )}
    </button>
  );
}
