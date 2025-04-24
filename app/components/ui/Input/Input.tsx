import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const inputStyles = cva(
  "block w-full rounded-3xl bg-main-pink-300 px-4 py-2 border border-solid",
  {
    variants: {
      isInvalid: {
        false: "border-transparent",
        true: "border-red-600",
      },
    },
  },
);

export default function Input(props: ComponentPropsWithoutRef<"input">) {
  const { className, "aria-invalid": ariaInvalid, ...rest } = props;

  const isInvalid = !!ariaInvalid;

  return (
    <input
      className={twMerge(inputStyles({ isInvalid }), className)}
      {...rest}
    />
  );
}
