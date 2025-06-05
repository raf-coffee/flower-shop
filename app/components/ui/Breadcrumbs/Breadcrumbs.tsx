"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Text, { TextSize, TextWeight } from "@/app/components/ui/Text";
import { BREADCRUMBS_SEPARATOR, PAGE_PATHS_TRANSLATIONS } from "@/constants";
import { Breadcrumb } from "@/types";

interface BreadcrumbsProps {
  className?: string;
  tailBreadcrumb?: Breadcrumb;
}

export default function Breadcrumbs({
  className,
  tailBreadcrumb,
}: BreadcrumbsProps) {
  const pathname = usePathname();

  const items: Breadcrumb[] = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, i, arr) => {
      const href = "/" + arr.slice(0, i + 1).join("/");
      const translationKey = decodeURIComponent(segment);

      return { title: PAGE_PATHS_TRANSLATIONS[translationKey], href };
    });

  let crumbs: Breadcrumb[] = [{ title: "Главная", href: "/" }, ...items];

  if (tailBreadcrumb) {
    crumbs = [...crumbs.slice(0, -1), tailBreadcrumb];
  }

  return (
    <div className={className}>
      <nav className="text-muted-foreground flex flex-wrap items-center space-x-1 text-soft-olive">
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
                    <Text weight={TextWeight.SEMIBOLD} size={TextSize.SMALL}>
                      {crumb.title}
                    </Text>
                  </Link>
                  <Text weight={TextWeight.SEMIBOLD} size={TextSize.SMALL}>
                    {BREADCRUMBS_SEPARATOR}
                  </Text>
                </>
              ) : (
                <Text
                  weight={TextWeight.SEMIBOLD}
                  className="whitespace-nowrap"
                  size={TextSize.SMALL}
                >
                  {crumb.title}
                </Text>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
