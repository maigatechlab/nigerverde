import type { Metadata } from 'next'
import { display, body } from './fonts'
import './globals.css'

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
    images: [{ url: '/photos/hero.jpg', width: 1200, height: 630, alt: 'NigerVerdé serres Sahel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NigerVerdé — Agribusiness climate-smart à Niamey',
    description: 'Légumes frais, locaux et traçables produits sous serres adaptées au Sahel.',
    images: ['/photos/hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-512.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
