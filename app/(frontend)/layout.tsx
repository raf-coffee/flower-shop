import { Montserrat } from "next/font/google";

import "./globals.css";

import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className}`}>
      <body className="overflow-x-hidden">
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
