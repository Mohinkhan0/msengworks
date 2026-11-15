import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "./components/JsonLd";
import { COMPANY_CONFIG } from "./data/companyData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#103b64",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY_CONFIG.canonicalUrl),
  title: {
    default: `Lathe Machine Work & Needle Loom Manufacturer | ${COMPANY_CONFIG.shortName}`,
    template: `%s | ${COMPANY_CONFIG.shortName}`,
  },
  description:
    "Professional lathe machine work, needle loom manufacturing, spare parts, die making, drilling, grinding, welding and industrial machine repairing services.",
  keywords: [
    "Lathe Machine Work",
    "Kharad Machine Work",
    "Needle Loom Machine Manufacturer",
    "Needle Loom Spare Parts Manufacturer",
    "Industrial Machine Parts Manufacturer",
    "Die Manufacturing Services",
    "Industrial Repairing Services",
    "Drilling and Grinding Services",
    "Welding and Fabrication Services",
    "Custom Machine Manufacturing",
    "Precision Kharad Job Work",
    "Narrow Fabric Loom Spare Parts",
  ],
  authors: [{ name: COMPANY_CONFIG.name }],
  creator: COMPANY_CONFIG.name,
  publisher: COMPANY_CONFIG.name,
  icons: {
    icon: "/img/logo.jpg",
    apple: "/img/logo.jpg",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: COMPANY_CONFIG.canonicalUrl,
  },
  openGraph: {
    title: `Lathe Machine Work & Needle Loom Manufacturer | ${COMPANY_CONFIG.shortName}`,
    description:
      "Professional lathe machine work, needle loom manufacturing, spare parts, die making, drilling, grinding, welding and industrial machine repairing services.",
    url: COMPANY_CONFIG.canonicalUrl,
    siteName: COMPANY_CONFIG.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Industrial lathe machining and needle loom manufacturing facility",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Lathe Machine Work & Needle Loom Manufacturer | ${COMPANY_CONFIG.shortName}`,
    description:
      "Professional lathe machine work, needle loom manufacturing, spare parts, die making, drilling, grinding, welding and industrial machine repairing services.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    ],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
