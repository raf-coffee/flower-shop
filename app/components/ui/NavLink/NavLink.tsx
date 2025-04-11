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
      mobile: ["border-b-main-pink-600 p-4 block"],
      desktop: [
        "sm:text-sm md:text-base sm:rounded-sm sm:px-2 sm:py-2 sm:text-center",
      ],
    },
    isActive: {
      false: null,
      true: ["bg-main-pink-600"],
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
