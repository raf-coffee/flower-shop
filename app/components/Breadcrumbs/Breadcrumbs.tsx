// components/ui/Breadcrumbs.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// import { ChevronRight } from 'lucide-react';

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: Crumb[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
}) => {
  const pathname = usePathname();

  const fallbackItems: Crumb[] = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => {
      const href = "/" + arr.slice(0, i + 1).join("/");
      return { label: decodeURIComponent(segment), href };
    });

  const crumbs = items ?? [{ label: "Главная", href: "/" }, ...fallbackItems];

  return (
    <div className={className}>
      <nav className="text-muted-foreground flex items-center space-x-1 text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;

          return (
            <span key={i} className="flex items-center space-x-1">
              {crumb.href && !isLast ? (
                <Link
                  href={crumb.href}
                  className="text-foreground hover:underline"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-foreground">
                  {crumb.label}
                </span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
};
