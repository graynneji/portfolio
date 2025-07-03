import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: 'swap',
});

// Your professional information
const myName = "Gray Nneji";
const baseUrl = "https://graynneji.dev"; // Replace with your actual domain

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F172A', // Matches your slate-950 background
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${myName} | Software Engineer & Full Stack Developer`,
    template: `%s | ${myName}`,
  },
  description: "Experienced Full Stack Developer and Software Engineer specializing in React, Next.js, and mobile app development. Creating innovative web solutions and responsive applications for businesses worldwide.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript Developer",
    "TypeScript",
    "React Native",
    "Web Development Services",
    "Freelance Developer",
    "Remote Developer",
    "UI/UX Development",
    "API Development",
    "Database Design",
    "Cloud Solutions",
    "E-commerce Development",
    "Progressive Web Apps",
    "graynneji",
  ],
  authors: [{ name: myName, url: baseUrl }],
  creator: myName,
  publisher: myName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    title: `${myName} - Full Stack Developer & Software Engineer`,
    description: 'Professional Full Stack Developer specializing in modern web technologies and mobile app development. Expert in React, Next.js, and cloud solutions.',
    siteName: `${myName}'s Portfolio`,
    images: [
      {
        url: `${baseUrl}/og-image.png`, // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: `${myName} - Portfolio Preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${myName} - Full Stack Developer & Software Engineer`,
    description: 'Full Stack Developer specializing in React, Next.js, and mobile app development. Building modern web solutions with cutting-edge technologies.',
    creator: '@graynneji', // Replace with your Twitter handle
    images: [`${baseUrl}/twitter-image.png`], // Replace with your actual Twitter card image
  },
  verification: {
    google: 'your-google-verification-code', // Replace with your Google verification code
    yandex: 'your-yandex-verification-code', // Replace with your Yandex verification code if needed
  },
  category: 'technology',
  classification: 'Web Development Services',
  manifest: `${baseUrl}/manifest.json`,
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': myName,
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#0F172A',
    'msapplication-config': `${baseUrl}/browserconfig.xml`,
  },
};

// Structured Data for better SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: myName,
  url: baseUrl,
  sameAs: [
    'https://github.com/graynneji',
    'https://linkedin.com/in/graynneji',
    'https://twitter.com/graynneji',
    // Add other social profile URLs
  ],
  jobTitle: 'Full Stack Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  description: 'Full Stack Developer and Software Engineer specializing in web and mobile application development.',
  knowsAbout: [
    'Web Development',
    'Software Engineering',
    'React',
    'Next.js',
    'Mobile App Development',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Database Design',
    'Cloud Architecture',
  ],
  offers: {
    '@type': 'Offer',
    availabilityStarts: new Date().toISOString(),
    serviceType: [
      'Web Development',
      'Mobile App Development',
      'Software Engineering',
      'Frontend Development',
      'Backend Development',
      'Full Stack Development',
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0F172A" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}