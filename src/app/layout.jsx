import { Inter } from 'next/font/google'
import Head from './head'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body className={inter.className}>
        <Providers>
        {/* Header */}

        <Header/>

        {/* Navbar */}

        <Navbar/>

        {/* SearchBox */}

        {children}
        </Providers>
      </body>
    </html>
  )
}
