import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manan-pal-portfolio.vercel.app"),

  title: {
    default: "Manan Pal | AI & Full Stack Developer",
    template: "%s | Manan Pal",
  },

  description:
    "Portfolio of Manan Pal — AI Developer, Full Stack Developer, and Machine Learning Enthusiast building modern web applications, intelligent systems, and impactful digital experiences.",

  keywords: [
    "Manan Pal",
    "AI Developer",
    "Full Stack Developer",
    "Machine Learning",
    "Deep Learning",
    "Next.js Developer",
    "React Developer",
    "Python Developer",
    "Portfolio Website",
    "Software Engineer",
  ],

  authors: [{ name: "Manan Pal" }],
  creator: "Manan Pal",
  publisher: "Manan Pal",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Manan Pal | AI & Full Stack Developer",
    description:
      "Explore projects, skills, achievements, and AI-powered applications built by Manan Pal.",
    url: "https://manan-pal-portfolio.vercel.app/",
    siteName: "Manan Pal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manan Pal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manan Pal | AI & Full Stack Developer",
    description:
      "AI Developer & Full Stack Developer building intelligent digital experiences.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}