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
  metadataBase: new URL("https://boreal-route.vercel.app"),
  title: {
    default: "Boreal Route | Northern lights expedition planning",
    template: "%s | Boreal Route",
  },
  description:
    "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
  applicationName: "Boreal Route",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Boreal Route | Northern lights expedition planning",
    description:
      "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
    url: "/",
    images: [
      {
        url: "/images/boreal-route-hero.png",
        width: 1672,
        height: 941,
        alt: "Moonlit Lofoten coastline beneath a restrained aurora.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boreal Route | Northern lights expedition planning",
    description:
      "A fictional northern-lights expedition platform for travel discovery, simulated booking, and departure coordination.",
    images: ["/images/boreal-route-hero.png"],
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
