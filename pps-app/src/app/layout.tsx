import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PalasadePrintingSupply.",
  description: "PalasadePrintingSupply.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
