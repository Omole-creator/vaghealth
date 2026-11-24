import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";

// Inter Tight is the closest Google font to the tight, geometric grotesque in font.jpg.
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const title = "DUSKWAY 2-in-1 Day & Night Car Visor | Omo Stores";
const description =
  "The DUSKWAY 2-in-1 clips onto your visor: a grey shield for harsh sun and an amber shield for full light at night. Pay on delivery, free delivery.";

export const metadata: Metadata = {
  metadataBase: new URL("https://omostores.vercel.app"),
  title,
  description,
  openGraph: { title, description, images: ["/images/car/car8.webp"], type: "website" },
  twitter: { card: "summary_large_image", images: ["/images/car/car8.webp"] },
};

export default function CarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${interTight.variable} min-h-screen bg-dw-paper font-display text-dw-ink`}>
      {children}
    </div>
  );
}
