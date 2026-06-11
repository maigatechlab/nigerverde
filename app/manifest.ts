import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NigerVerdé — Légumes frais à Niamey',
    short_name: 'NigerVerdé',
    description:
      'Légumes frais, locaux et traçables produits sous serres adaptées au Sahel — hydroponie, solaire, drones.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0C322C',
    theme_color: '#1B9548',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
