import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Alae Herrak | Full Stack Product Engineer",
    template: "%s | Alae Herrak",
  },
  description:
    "Full Stack Product Engineer specializing in bridging the gap between ambiguous client needs and high-performance production systems.",
  keywords: [
    "Alae Herrak",
    "Product Engineer",
    "Full Stack Developer",
    "Tauri and Electron Integration",
    "Systems Optimization",
    "Software Architecture",
  ],
  authors: [{ name: "Alae Herrak" }],
  creator: "Alae Herrak",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alaeherrak.com",
    title: "Alae Herrak | Full Stack Product Engineer",
    description:
      "Architecting resilient ecosystems and high-performance desktop applications. Explore my process and technical blog.",
    siteName: "Alae Herrak Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alae Herrak | Product Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alae Herrak | Full Stack Product Engineer",
    description: "Bridging ambiguous needs with high-performance systems.",
    creator: "@HerrakAlae",
    images: ["/og-image.png"],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} selection:bg-primary selection:text-primary-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
