import { ReactNode } from "react";

export default function LeadSection({ children }: { children: ReactNode }) {
  return (
    <section className="relative bg-main-pink-400 p-4 lg:mt-[-65px]">
      {children}
    </section>
  );
}
