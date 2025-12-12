import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
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
      <body
        className={`${robotoMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
