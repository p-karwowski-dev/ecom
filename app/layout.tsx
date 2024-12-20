'use client'
import '@/public/styles/globals.css'
import { geistSans, geistMono } from '@/public/fonts/appFonts'
// import type { Metadata } from 'next'
import { Nav, NavLink } from '@/components/nav/nav'
import { Footer } from '@/components/nav/footer'
import { Provider } from 'react-redux'
import { store } from '@/appState/store'
import { CmsButton } from '@/components/cms/CmsButton'
import CmsPanel from '../components/cms/CmsPanel'

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`min-h-screen flex justify-center ${geistSans.variable} ${geistMono.variable}`}
        >
          <CmsPanel />
          <div className="min-h-screen flex flex-col flex-1 w-full transition-all">
            <Nav>
              <NavLink href="/introduction">Introduction</NavLink>
              <NavLink href="/service">Service</NavLink>
              <NavLink href="/calendar">Calendar</NavLink>
            </Nav>
            <main className="relative isolate overflow-hidden bg-white py-6 sm:py-26 md:py-32 px-6 lg:px-8 max-w-2xl lg:max-w-6xl mx-auto p">
              {children}
            </main>
            <Footer />
            <CmsButton />
          </div>
        </body>
      </html>
    </Provider>
  )
}
