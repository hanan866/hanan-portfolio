import { Inter } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hanan Siraj - Frontend Developer & Graphics Designer',
  description:
    'Personal portfolio of Hanan Siraj, Frontend Developer and Graphics Designer',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} gradient-bg`}>
        {children}
      </body>
    </html>
  )
}