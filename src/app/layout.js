import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

// removed the default Geist font loading (next/font/google) — nothing
// referenced --font-geist-sans/--font-geist-mono anymore once
// page.module.css got dropped, and globals.css already sets its own
// system-ui font on :root, so it was dead weight (extra Google Fonts
// request for no visual effect)

export const metadata = {
  title: 'CarBuildApp',
  description:
    'Social media app for car hobbyists to document and share their builds.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar goes in the root layout, not page.js, so it renders on
            every route once we add more pages — not just the homepage */}
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
