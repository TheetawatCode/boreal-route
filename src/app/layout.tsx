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
  title: {
    default: "Boreal Route | Northern lights expedition planning",
    template: "%s | Boreal Route",
  },
  description:
    "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
  applicationName: "Boreal Route",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Boreal Route | Northern lights expedition planning",
    description:
      "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
  },
  twitter: {
    card: "summary",
    title: "Boreal Route | Northern lights expedition planning",
    description:
      "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
