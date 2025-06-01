import { Metadata } from "next";

import Hero from "@/app/components/Hero/Hero";

import FeedbackForm from "@/app/components/FeedbackForm/FeedbackForm";
import Contacts from "@/app/components/Contacts/Contacts";

export const metadata: Metadata = {
  title: "Контакты | Floristman - Яркие моменты вашей жизни",
  description:
    "Вы можете связаться с нами по номеру +7 \
495 000-00-00 или написать нам (Вотсапп/Телеграмм/Вайбер). \
Или ознакомиться с нашим ассортиментов в магазине, \
где мы поможем вам собрать идеальную цветочную композицию",
};

export default function ContactsPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" />
      <Contacts />
      <FeedbackForm title="Появились вопросы?" />
    </div>
  );
}
