import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne-var",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-var",
});

export const metadata: Metadata = {
  title: "Valentina Sosa — Frontend Developer & Game Designer",
  description:
    "Portfolio of Valentina Sosa, a Frontend Developer and Game Designer from Argentina. Specialized in React, JavaScript, Unity and C#.",
  keywords: [
    "Valentina Sosa",
    "Frontend Developer",
    "Game Designer",
    "React",
    "Unity",
    "Argentina",
    "Portfolio",
  ],
  openGraph: {
    title: "Valentina Sosa — Frontend Developer & Game Designer",
    description:
      "Portfolio of Valentina Sosa, a Frontend Developer and Game Designer from Argentina.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}