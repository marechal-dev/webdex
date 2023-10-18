import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'valor-100': '#ea0600',
      'valor-200': '#a70c08',
      'valor-300': '#730300',
      'valor-500': '#571412',
      'valor-950': '#201a1a',
      'mystic-50': '#3aa5c9',
      'mystic-100': '#3A78C9',
      'mystic-200': '#3B4CCA',
      'mystic-300': '#4A528A',
      'instinct-100': '#ffde00',
    },
  },
  plugins: [],
}
export default config
