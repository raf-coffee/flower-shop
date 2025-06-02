import Contacts from "@/app/components/ui/Contacts";
import Hero from "@/app/components/ui/Hero";

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
