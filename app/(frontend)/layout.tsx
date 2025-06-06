import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

import Footer from "@/app/components/ui/Footer";
import Header from "@/app/components/ui/Header";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

const lato = localFont({
  src: [
    {
      path: "../../public/fonts/Lato/lato-500.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Lato/lato-500.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/Lato/lato-600.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/Lato/lato-700.woff2",
      weight: "700",
    },
  ],
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} ${lato.variable}`}>
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
