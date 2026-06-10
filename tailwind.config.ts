import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-primary': '#1B9548',
        'green-bright': '#21A34E',
        'green-forest': '#215D50',
        'green-deep': '#134F47',
        'green-ink': '#0C322C',
        'orange-accent': '#E78838',
        'orange-bright': '#F68F31',
        'orange-soft': '#FFB981',
        cream: '#EDDCCD',
        'cream-soft': '#F6EFE6',
        bg: '#FBFDF9',
        'text-base': '#16271F',
        muted: '#5B6B61',
        border: '#E3EBE2',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      fontSize: {
        'h1': ['clamp(2.6rem,6.4vw,4.7rem)', { lineHeight: '1.1' }],
        'h2': ['clamp(2rem,3.6vw,3rem)', { lineHeight: '1.2' }],
        'h3': ['clamp(1.25rem,2vw,1.6rem)', { lineHeight: '1.3' }],
      },
    },
  },
  plugins: [],
}

export default config
