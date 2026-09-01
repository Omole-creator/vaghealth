import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Why Vaginal Odour Keeps Coming Back, Even When You're Doing Everything Right",
  description:
    "The guide that finally explains what's actually causing persistent vaginal odour, and how to take control for good.",
  openGraph: {
    title: "Why Vaginal Odour Keeps Coming Back, Even When You're Doing Everything Right",
    description:
      "Not another feminine wash that only masks the smell. The framework that finally puts you back in control.",
    images: ["/images/1224000.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/1224000.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
