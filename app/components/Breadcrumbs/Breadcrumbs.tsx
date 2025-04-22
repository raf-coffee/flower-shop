"use client";

import {
  BREADCRUMBS_SEPARATOR,
  PAGE_PATHS_TRANSLATIONS,
} from "@/app/components/Breadcrumbs/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const pathname = usePathname();

  const fallbackItems: Crumb[] = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => {
      const href = "/" + arr.slice(0, i + 1).join("/");
      const translationKey = decodeURIComponent(segment);

      return { label: PAGE_PATHS_TRANSLATIONS[translationKey], href };
    });

  const crumbs = [
    { label: "Главная", href: BREADCRUMBS_SEPARATOR },
    ...fallbackItems,
  ];

  return (
    <div className={className}>
      <nav className="text-muted-foreground flex items-center space-x-1 text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;

          return (
            <p key={i} className="flex items-center space-x-1">
              {crumb.href && !isLast ? (
                <>
                  <Link
                    href={crumb.href}
                    className="text-foreground hover:underline"
                  >
                    {crumb.label}
                  </Link>
                  <span>{BREADCRUMBS_SEPARATOR}</span>
                </>
              ) : (
                <span className="font-medium text-foreground">
                  {crumb.label}
                </span>
              )}
            </p>
          );
        })}
      </nav>
    </div>
  );
};
