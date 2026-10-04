import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alaeherrak.com"),
  title: {
    default: "Alae Herrak | Full-Stack Software Engineer",
    template: "%s | Alae Herrak",
  },
  description:
    "Full-Stack Software Engineer specializing in resilient web applications, granular access control systems, and high-performance cross-platform runtimes with React, TypeScript, and Node.js.",
  keywords: [
    "Alae Herrak",
    "Full-Stack Software Engineer",
    "Software Engineer",
    "Tauri",
    "Electron",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "Software Architecture",
  ],
  authors: [{ name: "Alae Herrak" }],
  creator: "Alae Herrak",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alaeherrak.com",
    title: "Alae Herrak | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer specializing in resilient web applications, granular access control systems, and high-performance cross-platform runtimes.",
    siteName: "Alae Herrak Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alae Herrak | Full-Stack Software Engineer",
    description:
      "Specializing in resilient web applications, granular access control systems, and high-performance cross-platform runtimes.",
    creator: "@HerrakAlae",
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

// JSON-LD for Search Engines
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alae Herrak",
  jobTitle: "Full-Stack Software Engineer",
  url: "https://alaeherrak.com",
  sameAs: [
    "https://github.com/alae-herrak",
    "https://linkedin.com/in/alae-herrak-ba9039210",
    "https://x.com/HerrakAlae",
  ],
  description:
    "Full-Stack Software Engineer specializing in resilient web applications, granular access control systems, and high-performance cross-platform runtimes.",
  knowsAbout: [
    "Software Engineering",
    "Web Development",
    "Tauri",
    "Electron",
    "React",
    "TypeScript",
    "Node.js",
    "System Architecture",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
