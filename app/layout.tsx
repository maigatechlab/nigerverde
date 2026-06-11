import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { display, body } from './fonts'
import './globals.css'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NigerVerdé',
  description:
    "Production de légumes frais, locaux et traçables à Diakindi (Niamey, Niger) grâce à des serres Sawtooth, l'hydroponie NFT, l'énergie solaire et les drones agricoles.",
  url: 'https://nigerverde.com',
  telephone: '+22778780808',
  email: 'contact@nigerverde.com',
  image: 'https://nigerverde.com/photos/hero.webp',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Diakindi, Niamey',
    addressCountry: 'NE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.5137,
    longitude: 2.1098,
  },
  areaServed: { '@type': 'City', name: 'Niamey' },
  knowsAbout: ['hydroponie', 'agriculture de précision', 'serres sawtooth', 'énergie solaire'],
}

export const metadata: Metadata = {
  title: 'NigerVerdé — Légumes frais, climate-smart à Niamey',
  description:
    "NigerVerdé produit des légumes frais, locaux et traçables à Diakindi (Niamey, Niger) grâce à des serres Sawtooth, l'hydroponie NFT, l'énergie solaire et l'agriculture de précision par drones.",
  keywords: ['légumes frais Niger', 'hydroponie Niamey', 'agribusiness Sahel', 'NigerVerdé', 'serres Niger'],
  authors: [{ name: 'NigerVerdé' }],
  creator: 'NigerVerdé',
  metadataBase: new URL('https://nigerverde.com'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://nigerverde.com',
    title: 'NigerVerdé — Agribusiness climate-smart à Niamey',
    description:
      'Légumes frais, locaux et traçables produits sous serres adaptées au Sahel — hydroponie, solaire, drones.',
    siteName: 'NigerVerdé',
    images: [{ url: '/photos/hero.webp', width: 1200, height: 630, alt: 'NigerVerdé serres Sahel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NigerVerdé — Agribusiness climate-smart à Niamey',
    description: 'Légumes frais, locaux et traçables produits sous serres adaptées au Sahel.',
    images: ['/photos/hero.webp'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon-512.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <head>
        {/* Preload hero image for LCP — browser picks the right size from srcset */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fphotos%2Fhero.webp&w=1920&q=75"
          imageSrcSet="/_next/image?url=%2Fphotos%2Fhero.webp&w=640&q=75 640w, /_next/image?url=%2Fphotos%2Fhero.webp&w=750&q=75 750w, /_next/image?url=%2Fphotos%2Fhero.webp&w=828&q=75 828w, /_next/image?url=%2Fphotos%2Fhero.webp&w=1080&q=75 1080w, /_next/image?url=%2Fphotos%2Fhero.webp&w=1920&q=75 1920w"
          imageSizes="100vw"
          fetchPriority="high"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
