import type { Metadata } from 'next'
import './globals.css'

const siteUrl = 'https://edpaulopedro.com'
const siteTitle = 'Ed Paulo Pedro // Web Developer'
const siteDescription = 'Senior Web Developer specializing in high-performance systems and technical minimalism.'
const siteImage = `${siteUrl}/assets/screenshot.png`

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/assets/favicon.webp',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    images: [{ url: siteImage, width: 1200, height: 630, alt: siteTitle }],
    siteName: 'Ed Paulo Pedro',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&family=Geist:wght@100..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="mesh-bg">{children}</body>
    </html>
  )
}
