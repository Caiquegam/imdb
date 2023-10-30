import { Inter } from 'next/font/google'
import Head from './head'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={inter.className}>
        {/* Header */}
        <Header/>
        {/* Navbar */}

        {/* SearchBox */}
        {children}
      </body>
    </html>
  )
}
