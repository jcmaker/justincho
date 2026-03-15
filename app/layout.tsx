import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/i18n/language-provider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Justin Cho",
  description: "Justin Cho's Portfolio",
  openGraph: {
    title: "Justin Cho",
    description: "Justin Cho's Portfolio",
    images: [
      {
        url: "/justindev_og.png",
        width: 1200,
        height: 630,
        alt: "Justin Cho",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Cho",
    description: "Justin Cho's Portfolio",
    images: ["/justindev_og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
