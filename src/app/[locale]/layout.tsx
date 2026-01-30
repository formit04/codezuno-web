import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Codezuno | Software Development Company",
  description:
    "Transform your ideas into powerful, scalable software solutions. From web applications to mobile apps, we craft digital products that drive results.",
  keywords: [
    "software development",
    "web development",
    "mobile development",
    "custom software",
    "React",
    "Next.js",
    "Node.js",
    "API development",
  ],
  authors: [{ name: "Codezuno" }],
  creator: "Codezuno",
  openGraph: {
    type: "website",
    url: "https://codezuno.com",
    siteName: "Codezuno",
    title: "Codezuno | Software Development Company",
    description:
      "Transform your ideas into powerful, scalable software solutions. From web applications to mobile apps, we craft digital products that drive results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codezuno | Software Development Company",
    description:
      "Transform your ideas into powerful, scalable software solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pl" | "es")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
