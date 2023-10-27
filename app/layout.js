"use client"

import '@/globals.css'
// import { AnimatePresence } from 'framer-motion';
import { Montserrat } from "next/font/google";
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import metaInfo from '../dataLibrary/metaInfo'

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
);

// export const metadata = {
//   title: 'Mongare Samwel | Software Engineer',
//   description: 'I am a software engineer based in Nairobi, Kenya. I am passionate about building software that solves real world problems.',
//   url: 'https://mongare-samwel.vercel.app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {
          metaInfo.map((meta, index) => (
            <meta key={`${index}- ${meta}`} name={meta.name} content={meta.content} />
          ))
        }
        
        <link rel="canonical" href="https://mongare-samwel.vercel.app" />
        <link rel="icon" href="/images/profile/developer-pic-2.jpg" />

        <title>Samwel Mongare | Software Engineer</title>
      </head>
      <body>
        <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
          <NavBar />
          {/* <AnimatePresence mode='wait'> */}
            {children}
          {/* </AnimatePresence> */}
          <Footer />
        </main>
        {/* <script id='theme-switcher' strategy="beforeInteractive">
        {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </script> */}
      </body>
    </html>
  )
}
