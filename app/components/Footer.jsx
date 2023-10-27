import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-large
      sm:text-base
      dark:border-light dark:text-light
    ">
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build with <span className="text-red-500">&nbsp;❤&nbsp;</span> by &nbsp;
          <Link href="/about" className="underline underline-offset-2">Mong&apos;are</Link>
        </div>
        <Link href="/contact" className="underline underline-offset-2">Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer;