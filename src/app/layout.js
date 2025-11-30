import "./globals.css";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";

// Inter font for Latin scripts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Noto Sans Arabic for Arabic text
const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata = {
  title: "Alivia - Your Gateway to Spain",
  description: "Expert immigration and study guidance for your Spanish journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${inter.variable} ${notoSansArabic.variable} font-sans`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
