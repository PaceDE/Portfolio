import type { Metadata } from 'next'
import { Fraunces, IBM_Plex_Mono, Epilogue } from 'next/font/google'
import { ThemeProvider } from '@/layout/ThemeProvider'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-mono',
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-epilogue',
})

export const metadata: Metadata = {
  title: 'Dipesh Shrestha — Web Developer',
  description: 'Web Developer based in Kathmandu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`h-full ${fraunces.variable} ${ibmPlexMono.variable} ${epilogue.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-full'>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}