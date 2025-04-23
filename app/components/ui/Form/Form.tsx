import { ComponentPropsWithoutRef } from "react";

export default function Label({
  onSubmit,
  children,
  className,
}: ComponentPropsWithoutRef<"form">) {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}
