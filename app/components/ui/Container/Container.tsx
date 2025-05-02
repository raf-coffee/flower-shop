import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Container({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={twMerge("mx-auto max-w-[1280px] px-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}
