import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

//! imp Comps
import Footer from '../components/Footer'
import Header from '../components/Header'
import Provider from './provider'
//! Context
import { AppStoreProvider } from '../context'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Book Store',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppStoreProvider>
          <Provider>
            <Header />
            {children}
            <Footer />
          </Provider>
        </AppStoreProvider>
      </body>
    </html>
  )
}