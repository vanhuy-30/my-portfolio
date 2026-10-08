import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { AppProviders } from "@/components/providers/AppProviders";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ly Van Huy, Software Engineer",
  description:
    "Software engineer in Ho Chi Minh City. Flutter, React, and mobile products for Motives Vietnam and Vitalify Asia.",
  openGraph: {
    title: "Ly Van Huy, Software Engineer",
    description:
      "Flutter, React, and mobile products. Motives Vietnam and Vitalify Asia.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-signal-layers.jpg",
        width: 1200,
        height: 630,
        alt: "Ly Van Huy portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ly Van Huy, Software Engineer",
    description:
      "Flutter, React, and mobile products. Motives Vietnam and Vitalify Asia.",
    images: ["/images/hero-signal-layers.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetbrains.variable} font-sans`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme')||localStorage.getItem('stephen-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');document.documentElement.dataset.theme='dark';}else{document.documentElement.dataset.theme='light';}var l=localStorage.getItem('portfolio-locale')||localStorage.getItem('stephen-locale');if(l==='en'||l==='vi'){document.documentElement.lang=l;}}catch(e){}})();`,
          }}
        />
        <AppProviders>
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[55] opacity-[0.035] mix-blend-overlay grain"
          />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
