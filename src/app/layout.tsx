import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alburuj | Premier Foreign Employment Agency & Gulf Careers",
  description: "Alburuj is a licensed, elite foreign employment agency connecting skilled professionals and workers with premium career opportunities in Saudi Arabia, Kuwait, Qatar, UAE, Oman, and Jordan.",
  keywords: ["foreign employment", "Gulf careers", "work abroad", "Saudi Arabia jobs", "Kuwait jobs", "Qatar jobs", "agency recruitment", "Alburuj recruitment"],
  authors: [{ name: "Alburuj Agency" }],
  openGraph: {
    title: "Alburuj | Premier Foreign Employment Agency & Gulf Careers",
    description: "Your gateway to elite career placements in Saudi Arabia, Kuwait, Qatar, Oman, and Jordan. Trusted licensing, end-to-end visa services, and candidate support.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-brand-gold selection:text-brand-navy">
        {children}
      </body>
    </html>
  );
}
