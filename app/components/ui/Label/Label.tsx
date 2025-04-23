import { ComponentPropsWithoutRef } from "react";

export default function Label({
  htmlFor,
  children,
  className,
}: ComponentPropsWithoutRef<"label">) {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
}
