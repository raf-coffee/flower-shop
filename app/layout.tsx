import { Montserrat } from "next/font/google";
import Header from "./components/Header/Header";
import "./globals.css";
import Footer from "./components/Footer/Footer";

const montserrat = Montserrat({
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
    <html lang="en" className={montserrat.className}>
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
