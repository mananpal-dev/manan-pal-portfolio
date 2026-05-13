import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manan-pal-portfolio.vercel.app"),

  title: {
    default: "Manan Pal | ML Engineer & AI Developer",
    template: "%s | Manan Pal",
  },

  description:
    "Portfolio of Manan Pal — ML Engineer, AI Developer, and CS student at KIIT University. Building graph neural networks, computer vision systems, and full-stack AI products with measurable real-world outcomes.",

  keywords: [
    "Manan Pal",
    "ML Engineer",
    "AI Developer",
    "Machine Learning",
    "Deep Learning",
    "Graph Neural Networks",
    "Computer Vision",
    "PyTorch",
    "TensorFlow",
    "Next.js Developer",
    "Python Developer",
    "KIIT University",
    "Software Engineer Intern",
    "Applied AI",
    "Portfolio",
  ],

  authors: [{ name: "Manan Pal", url: "https://github.com/mananpal-dev" }],
  creator: "Manan Pal",
  publisher: "Manan Pal",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Manan Pal | ML Engineer & AI Developer",
    description:
      "Explore ML projects, graph security systems, computer vision benchmarks, and full-stack AI applications built by Manan Pal — KIIT CSE 2027.",
    url: "https://manan-pal-portfolio.vercel.app",
    siteName: "Manan Pal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manan Pal — ML Engineer & AI Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manan Pal | ML Engineer & AI Developer",
    description:
      "ML Engineer & AI Developer — 99.8% ViT accuracy, GNN security systems, and full-stack AI products. Open to SWE and ML internships.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
      className={`${manrope.variable} scroll-smooth`}
    >
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
