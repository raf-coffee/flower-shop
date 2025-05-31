import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import Text, { TextFont, TextSize, TextWeight } from "../Text";

type ButtonProps = VariantProps<typeof buttonVariants> &
  ComponentPropsWithoutRef<"button">;

const buttonVariants = cva(
  "min-w-fit rounded-full font-semibold text-white transition duration-300 px-3 lg:py-2",
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
        large: "w-[170px] lg:w-[275px] px-4 py-4 lg:py-6",
        normal: "w-[72px] md:w-[100px] lg:w-[140px]",
        small: "min-w-[110px] py-1 lg:py-0 px-4",
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
      {size === "normal" && (
        <Text
          font={TextFont.LATO}
          weight={TextWeight.SEMIBOLD}
          className="text-xxs lg:text-xl"
        >
          {children}
        </Text>
      )}
      {size === "large" && (
        <Text
          font={TextFont.MONTSERRAT}
          size={TextSize.NORMAL}
          weight={TextWeight.BOLD}
        >
          {children}
        </Text>
      )}
      {size === "small" && (
        <Text
          font={TextFont.LATO}
          weight={TextWeight.SEMIBOLD}
          className="text-[12px] lg:text-[12px]"
        >
          {children}
        </Text>
      )}
    </button>
  );
}
