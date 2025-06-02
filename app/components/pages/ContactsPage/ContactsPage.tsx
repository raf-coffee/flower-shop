import { Contacts, Hero } from "@/app/components/ui";
import { FeedbackForm } from "@/app/components/forms";

export default function ContactsPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" />
      <Contacts />
      <FeedbackForm title="Появились вопросы?" />
    </div>
  );
}
