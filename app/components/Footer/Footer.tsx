import { IconPhoneCall, IconMailFilled } from "@tabler/icons-react";
import SocialList from "../SocialList/SocialList";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border-t-2 border-t-main-pink-600 bg-main-pink-400 p-4 font-medium md:p-10 md:pb-4 lg:p-14 lg:pb-12">
      <h2 className="mb-2 md:mb-4 md:text-2xl lg:mb-6 lg:pt-1 lg:text-4xl">
        Контакты:
      </h2>
      <a
        href="tel:+7495111111"
        className="mb-2 flex items-center md:text-lg lg:mb-1.5 lg:text-2xl"
      >
        <IconPhoneCall className="me-1 text-icons-pink" />
        +749512345678
      </a>
      <a
        href="tel:+7495111111"
        className="mb-2 flex items-center md:text-lg lg:mb-7 lg:text-2xl"
      >
        <IconMailFilled className="me-1 text-icons-pink" />
        flowermail@gmail.com
      </a>
      <SocialList className="mb-2 md:mb-4 lg:mb-8" />
      <p>&copy; {new Date().getFullYear()}. Все права защищены</p>
    </footer>
  );
}
