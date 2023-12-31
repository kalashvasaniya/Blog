import './globals.css'
import React from 'react'
import { Inter } from 'next/font/google'
import Navbar from './navbar/page'
import Footer from './footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blogger',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
        </head>
        <body className={inter.className}>
          {children}
          <div className="bg-black">
            <Navbar />
            <Footer />
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>
          <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
      </html>
    </>
  )
}