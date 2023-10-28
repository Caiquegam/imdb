import { Inter } from 'next/font/google'
import Head from './head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
