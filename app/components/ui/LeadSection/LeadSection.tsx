import { ReactNode } from "react";

function LeadSection({ children }: { children: ReactNode }) {
  return (
    <section className="bg-main-pink-400 p-4 lg:mt-[-65px]">{children}</section>
  );
}

export default LeadSection;
