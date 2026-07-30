import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'

export const metadata = {
  title: 'Modus OS',
  description: 'Modus OS — Restaurant Operating System'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </body>
    </html>
  )
}
