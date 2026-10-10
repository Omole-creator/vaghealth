import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://vaghealth.vercel.app"),
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

// Runs during HTML parse, long before the React bundle arrives. Without
// IntersectionObserver it bails out and every section simply stays visible.
const revealScript = `(function(){
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.setAttribute("data-js", "");
  function start() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.setAttribute("data-shown", "");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -80px 0px" });
    document.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body className="font-body bg-background text-charcoal antialiased">
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2193434301489321');
            fbq('track', 'PageView');
          `}
        </Script>
        {/* Raw HTML on purpose: as a JSX <img>, React hoists it into a <link rel="preload">
            in <head>, which fires a second PageView for every visitor with JS enabled. */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=2193434301489321&ev=PageView&noscript=1" />',
          }}
        />
        {children}
      </body>
    </html>
  );
}
