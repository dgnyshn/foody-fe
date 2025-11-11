import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mealmatesapp.app"),
  title: {
    default: "Foody - Discover Amazing Recipes from Around the World",
    template: "%s | Foody",
  },
  description:
    "Join the waitlist for Foody! Discover thousands of recipes, find dishes with your ingredients, and cook with step-by-step guidance. Your personal cooking companion.",
  keywords: [
    "recipe app",
    "cooking app",
    "food recipes",
    "meal planning",
    "ingredient search",
    "step-by-step cooking",
    "recipe discovery",
    "cooking guide",
    "food app",
    "recipe finder",
  ],
  authors: [{ name: "Foody Team" }],
  creator: "Foody",
  publisher: "Foody",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mealmatesapp.app",
    title: "Foody - Discover Amazing Recipes from Around the World",
    description:
      "Join the waitlist for Foody! Discover thousands of recipes, find dishes with your ingredients, and cook with step-by-step guidance.",
    siteName: "Foody",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foody - Discover Amazing Recipes from Around the World",
    description:
      "Join the waitlist for Foody! Discover thousands of recipes, find dishes with your ingredients, and cook with step-by-step guidance.",
    creator: "@foodyapp", // Twitter handle'ınız varsa
  },
  verification: {
    google: "your-google-verification-code", // Google Search Console'dan alacağınız kod
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: "https://mealmatesapp.app",
  },
  category: "Food & Cooking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Foody",
    description:
      "Discover thousands of recipes, find dishes with your ingredients, and cook with step-by-step guidance.",
    url: "https://mealmatesapp.app",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
