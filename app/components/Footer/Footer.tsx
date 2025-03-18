import {
  IconPhoneCall,
  IconMailFilled,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
} from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center border-t-2 border-t-main-pink-600 bg-main-pink-400 p-4 font-medium">
      <h2 className="mb-2">Контакты:</h2>
      <a href="tel:+7495111111" className="mb-2 flex">
        <IconPhoneCall className="me-1 text-icons-pink" />
        +749512345678
      </a>
      <a href="tel:+7495111111" className="mb-2 flex">
        <IconMailFilled className="me-1 text-icons-pink" />
        flowermail@gmail.com
      </a>
      <div className="mb-2 flex gap-4 text-icons-pink">
        <IconBrandWhatsapp size={32} />
        <IconBrandTelegram size={32} />
        <IconBrandFacebook size={32} />
        <IconBrandInstagram size={32} />
      </div>
      <p>&copy; {new Date().getFullYear()}. Все права защищены</p>
    </footer>
  );
}
