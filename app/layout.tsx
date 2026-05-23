import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Obsidian Core // Architecting Digital Excellence',
  description: 'Senior Web Developer specializing in high-performance systems and technical minimalism.',
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
