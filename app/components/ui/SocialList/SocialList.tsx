import {
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

const FOOTER_SOCIAL_LIST = [
  {
    href: "#",
    Icon: IconBrandWhatsapp,
  },
  {
    href: "#",
    Icon: IconBrandTelegram,
  },
  {
    href: "#",
    Icon: IconBrandFacebook,
  },
  {
    href: "#",
    Icon: IconBrandInstagram,
  },
];

function SocialList({ className }: { className?: string }) {
  return (
    <ul className={twMerge("flex gap-5 text-icons-pink", className)}>
      {FOOTER_SOCIAL_LIST.map(({ Icon, href }, index) => (
        <li key={`${href}-${index}`}>
          <a href={href}>
            <Icon size={32} className="h-auto w-8 md:w-10 lg:w-12" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialList;
