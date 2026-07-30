import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Fixigo | Smart Home Appliance Care — Repair, Restore, Resell",
  description: "Simplify the entire lifecycle of your home appliances. Book instant repairs, schedule certified installations, estimate resale values, and manage warranties. Clean, trustable, and sustainable care for home appliance hardware.",
  keywords: ["appliance repair", "home services", "appliance resale", "technician tracking", "warranty manager", "fixigo app"],
  authors: [{ name: "Fixigo Technologies" }],
  icons: {
    icon: [
      { url: "/fixigo_logo_smart_f.svg", type: "image/svg+xml" },
    ],
    shortcut: "/fixigo_logo_smart_f.svg",
    apple: "/fixigo_logo_smart_f.svg",
  },
  manifest: "/manifest.json",
  metadataBase: new URL('https://fixigo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fixigo.com',
    title: 'Fixigo | Smart Home Appliance Care',
    description: 'Simplify the entire lifecycle of your home appliances. Book instant repairs, schedule certified installations, estimate resale values, and manage warranties.',
    siteName: 'Fixigo',
    images: [
      {
        url: '/hero-illustration-clean.png',
        width: 1200,
        height: 630,
        alt: 'Fixigo - Smart Home Appliance Care',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fixigo | Smart Home Appliance Care',
    description: 'Simplify the entire lifecycle of your home appliances. Book instant repairs and more.',
    images: ['/hero-illustration-clean.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${caveat.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen bg-white text-slate-900 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
