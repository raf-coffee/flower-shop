import { Montserrat, Lato } from "next/font/google";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
});

const lato = Lato({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-lato",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.className} ${lato.variable}`}>
      <body>
        <div className="flex min-h-dvh flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
