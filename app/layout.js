import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL } from "@/lib/tools";
import { WEBINCODER_URL } from "@/lib/company";

// Tells search engines that Typnivo is a website published by Webincoder.
const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Typnivo",
  url: SITE_URL,
  description: "Free text and social tools: fancy fonts, symbols, bios, captions and usernames.",
  publisher: {
    "@type": "Organization",
    name: "Webincoder",
    url: WEBINCODER_URL,
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "Typnivo",
    type: "website",
    url: SITE_URL,
  },
  title: "Typnivo — Free Text & Social Tools",
  authors: [{ name: "Webincoder", url: WEBINCODER_URL }],
  publisher: "Webincoder",
  description: "Create stylish text, fonts, symbols, bios, captions and usernames instantly with free online tools from Typnivo.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7c3aed",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
