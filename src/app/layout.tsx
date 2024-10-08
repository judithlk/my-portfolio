import type { Metadata } from "next";
import "./globals.css";

import Wrapper from "@/components/Wrapper";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "judith yusuf",
  description: "judith yusuf - software engineer",
  openGraph: {
    title: "judith yusuf",
    description: "judith yusuf - software engineer",
    url: "https://judithyusuf.vercel.app",
    siteName: "judith yusuf - software engineer",
    images: [
      { url: "https://judithyusuf.vercel.app/og.png", alt: "judith yusuf" },
    ],
    type: "website",
  },
  twitter: {
    title: "judith yusuf",
    description: "judith yusuf - software engineer",
    images: [
      { url: "https://judithyusuf.vercel.app/og.png", alt: "judith yusuf" },
    ],
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#222]`}>
        <Wrapper>
          <Navigation />
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
