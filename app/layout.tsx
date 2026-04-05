import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/back-to-top";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PageLoaderProvider } from "@/components/page-loader-provider";
import { StickyActions } from "@/components/sticky-actions";
import { siteConfig } from "@/data/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://newhasubeautycare.example.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.heroImages[0]],
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        <PageLoaderProvider>
          <div className="relative overflow-hidden">
            {/* Decorative mesh keeps the brand atmosphere consistent across pages. */}
            <div className="absolute inset-x-0 top-0 -z-10 h-[30rem] bg-mesh opacity-90" />
            <Header />
            <main>{children}</main>
            <Footer />
            <StickyActions />
            <BackToTop />
          </div>
        </PageLoaderProvider>
      </body>
    </html>
  );
}
