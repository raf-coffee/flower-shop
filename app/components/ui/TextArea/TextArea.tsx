import { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textareaStyles = cva(
  "block w-full rounded-3xl bg-main-pink-300 px-4 py-2 border border-solid h-full",
  {
    variants: {
      isInvalid: {
        false: "border-transparent",
        true: "border-red-600",
      },
    },
  },
);

export default function TextArea(props: ComponentPropsWithoutRef<"textarea">) {
  const { className, "aria-invalid": ariaInvalid, ...rest } = props;

  const isInvalid = !!ariaInvalid;

  return (
    <textarea
      className={twMerge(textareaStyles({ isInvalid }), className)}
      {...rest}
    />
  );
}
