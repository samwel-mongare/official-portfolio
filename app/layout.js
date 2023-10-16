// import Footer from '@/components/Footer';
// import NavBar from '@/components/NavBar';
import '@/app/globals.css'
// import { AnimatePresence } from 'framer-motion';
import { Montserrat } from "next/font/google";
import Head from 'next/head';

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: "--font-mont"
  }
);

export const metadata = {
  title: 'Mongare Samwel | Software Engineer',
  description: 'I am a software engineer based in Nairobi, Kenya. I am passionate about building software that solves real world problems.',
  url: 'https://mongare-samwel.vercel.app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script id='theme-switcher' strategy="beforeInteractive">
        {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </script>
      </Head>
      <body>
        <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
          {/* <NavBar /> */}
          {/* <AnimatePresence mode='wait'> */}
            {children}
          {/* </AnimatePresence> */}
          {/* <Footer /> */}
        </main>
      </body>
    </html>
  )
}
