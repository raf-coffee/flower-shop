import { ComponentPropsWithoutRef } from "react";

export default function ErrorMessage({
  children,
  ...rest
}: ComponentPropsWithoutRef<"p">) {
  return (
    <p {...rest} className="mt-1 text-red-600">
      {children}
    </p>
  );
}
