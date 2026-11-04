import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Sans, Inter, Manrope, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope-src",
  subsets: ["latin"],
  weight: ["800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const poppins = Poppins({
  variable: "--font-poppins-src",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Zoiko Mobility | EV, Driver & Fleet Mobility Platform",
  description: "Zoiko Mobility — mobility for people, opportunity for communities.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${manrope.variable} ${ibmPlexSans.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
