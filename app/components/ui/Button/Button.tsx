import { ComponentPropsWithoutRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

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
        normal: "px-16 py-2 lg:py-6",
        small: "px-4 py-1 text-xs lg:py-2",
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
      {children}
    </button>
  );
}
