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
        normal:
          "min-w-[70px] max-w-[200px] lg:min-w-[100px] lg:max-w-[275px] px-6 py-2 lg:py-6",
        small:
          "max-w-[40px] max-w-[75px] lg:max-w-[150px] px-4 py-1 text-xs lg:py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      disabled: false,
      size: "normal",
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
      <Text
        font={TextFont.LATO}
        size={TextSize.SMALL}
        weight={TextWeight.SEMIBOLD}
        className="tracking-wider"
      >
        {children}
      </Text>
    </button>
  );
}
