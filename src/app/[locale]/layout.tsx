import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Inter, JetBrains_Mono } from "next/font/google";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codezuno.com"),
  title: {
    default: "Codezuno | Custom Software Development & AI Solutions",
    template: "%s | Codezuno",
  },
  description:
    "Professional software development company specializing in custom web applications, mobile apps, AI chatbots, process automation, and cloud solutions. Transform your ideas into powerful digital products.",
  keywords: [
    "software development",
    "web development",
    "mobile development",
    "custom software",
    "AI chatbot",
    "AI solutions",
    "process automation",
    "React",
    "Next.js",
    "Node.js",
    "API development",
    "cloud solutions",
    "AWS",
    "software house",
    "custom application",
    "machine learning",
    "GPT integration",
    "enterprise software",
  ],
  authors: [{ name: "Codezuno", url: "https://codezuno.com" }],
  creator: "Codezuno",
  publisher: "Codezuno",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://codezuno.com",
    siteName: "Codezuno",
    title: "Codezuno | Custom Software Development & AI Solutions",
    description:
      "Professional software development company. Custom web apps, mobile apps, AI chatbots, and cloud solutions. Transform your ideas into powerful digital products.",
    locale: "en_US",
    alternateLocale: ["pl_PL", "es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codezuno | Custom Software Development & AI Solutions",
    description:
      "Professional software development company. Custom web apps, mobile apps, AI chatbots, and cloud solutions.",
    creator: "@codezuno",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Codezuno",
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
      <head>
        <link rel="alternate" hrefLang="en" href="https://codezuno.com/en" />
        <link rel="alternate" hrefLang="pl" href="https://codezuno.com/pl" />
        <link rel="alternate" hrefLang="es" href="https://codezuno.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://codezuno.com/en" />
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <GoogleAnalytics />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
