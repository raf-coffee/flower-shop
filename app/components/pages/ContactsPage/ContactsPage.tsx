import Hero from "@/app/components/Hero/Hero";

import FeedbackForm from "@/app/components/FeedbackForm/FeedbackForm";
import Contacts from "@/app/components/Contacts/Contacts";

export default function ContactsPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" />
      <Contacts />
      <FeedbackForm title="Появились вопросы?" />
    </div>
  );
}
