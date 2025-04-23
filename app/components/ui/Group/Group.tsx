import { ComponentPropsWithoutRef } from "react";

export default function Group({
  children,
  className,
}: ComponentPropsWithoutRef<"div">) {
  return <div className={className}>{children}</div>;
}
