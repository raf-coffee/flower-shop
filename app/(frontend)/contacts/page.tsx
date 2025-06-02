import ContactsPage from "@/app/components/pages/ContactsPage/ContactsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Floristman - Яркие моменты вашей жизни",
  description:
    "Вы можете связаться с нами по номеру +7 \
495 000-00-00 или написать нам (Вотсапп/Телеграмм/Вайбер). \
Или ознакомиться с нашим ассортиментов в магазине, \
где мы поможем вам собрать идеальную цветочную композицию",
};

export default function ContactsRoute() {
  return <ContactsPage />;
}
