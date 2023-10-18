import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const roboto = Roboto({
  preload: true,
  fallback: ['sans-serif'],
  weight: [
    '400',
    '500',
    '700',
    '900'
  ],
})

export const metadata: Metadata = {
  title: 'WebDex',
  description: 'The #1 Pokémon information app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
