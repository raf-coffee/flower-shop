"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Text, TextWeight } from "../ui";
import { BREADCRUMBS_SEPARATOR, PAGE_PATHS_TRANSLATIONS } from "@/constants";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  className?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className }) => {
  const pathname = usePathname();

  const items: Crumb[] = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => {
      const href = "/" + arr.slice(0, i + 1).join("/");
      const translationKey = decodeURIComponent(segment);

      return { label: PAGE_PATHS_TRANSLATIONS[translationKey], href };
    });

  const crumbs = [{ label: "Главная", href: BREADCRUMBS_SEPARATOR }, ...items];

  return (
    <div className={className}>
      <nav className="text-muted-foreground flex items-center space-x-1 text-sm text-soft-olive">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;

          return (
            <div key={i} className="flex items-center space-x-1">
              {crumb.href && !isLast ? (
                <>
                  <Link
                    href={crumb.href}
                    className="font-semibold text-foreground hover:underline"
                  >
                    <Text weight={TextWeight.SEMIBOLD}>{crumb.label}</Text>
                  </Link>
                  <Text weight={TextWeight.SEMIBOLD}>
                    {BREADCRUMBS_SEPARATOR}
                  </Text>
                </>
              ) : (
                <Text weight={TextWeight.SEMIBOLD}>{crumb.label}</Text>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
