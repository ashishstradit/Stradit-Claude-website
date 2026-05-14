import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stradit — Applied AI & Engineering for Capital Markets',
  description: 'Stradit partners with capital-markets and asset-management leaders to embed production-grade AI into the core of their operations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
