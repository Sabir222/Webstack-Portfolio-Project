import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
const locales = ["en", "fr"];
export const metadata: Metadata = {
  title: "Blüboarding",
  description: "Essaouira's best water sports lessons club.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();
  const messages = useMessages();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-WF45SJZK" />
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Toaster richColors />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
