import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <body className="font-sans min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
