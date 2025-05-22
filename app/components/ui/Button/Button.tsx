import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Text, { TextFont, TextSize, TextWeight } from "../Text";

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<"button">;

const buttonVariants = cva(
  "rounded-full font-semibold text-white transition duration-300",
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
        large:
          "min-w-[70px] max-w-[200px] lg:min-w-[100px] lg:max-w-[275px] px-6 py-2 lg:py-6",
        normal:
          "max-w-[40px] max-w-[75px] lg:max-w-[140px] px-4 py-1 text-xs lg:py-2",
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
          className="tracking-wider"
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
