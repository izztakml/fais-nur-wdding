import type { Metadata } from "next";
import { Dancing_Script, Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "The Wedding of Nur & Fais",
  description: "25 & 26 July 2026 — Jemputan Kahwin Nur & Fais",
  icons: {
    icon: [
      { url: "/images/fn-logo.png", sizes: "192x192", type: "image/png" },
      { url: "/images/fn-logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/fn-logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "The Wedding of Nur & Fais",
    description: "25 & 26 July 2026 — Jemputan Kahwin Nur & Fais",
    url: "https://shfiqupzlqzvmdjgtlas.supabase.co",
    siteName: "Nur & Fais Wedding",
    images: [{ url: "/images/fn-logo.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ms"
      className={`${dancingScript.variable} ${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
