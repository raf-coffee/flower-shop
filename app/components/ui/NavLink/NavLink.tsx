import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

type NavLinkVariants = VariantProps<typeof navLink>;

interface NavLinkVariantsProps
  extends LinkProps,
    Required<NavLinkVariants>,
    Omit<ComponentPropsWithoutRef<"a">, "href"> {}

const navLink = cva("font-medium", {
  variants: {
    variant: {
      mobile: ["border-b-2 border-b-main-pink-600 flex flex-col p-4"],
      desktop: [
        "sm:rounded-sm sm:px-2 min-[765px]:px-4 min-[765px]:py-2  sm:hover:bg-main-pink-600 sm:transition-colors sm:flex sm:text-center sm:items-cente sm:border-2 sm:border-transparent",
      ],
    },
    isActive: {
      false: null,
      true: ["font-bold"],
    },
  },
});

export default function NavLink({
  variant,
  isActive,
  children,
  ...props
}: NavLinkVariantsProps) {
  return (
    <Link {...props} className={twMerge(navLink({ variant, isActive }))}>
      {children}
    </Link>
  );
}
