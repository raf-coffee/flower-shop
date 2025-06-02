import Hero from "@/app/components/ui/Hero/Hero";

import {} from "@/app/components";
import { Contacts, FeedbackForm } from "@/app/components";

export default function ContactsPage() {
  return (
    <div className="bg-main-pink-300">
      <Hero heading="Контакты" />
      <Contacts />
      <FeedbackForm title="Появились вопросы?" />
    </div>
  );
}
