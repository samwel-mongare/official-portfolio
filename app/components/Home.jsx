"use client"

import Layout from '@/components/Layout';
import Image from 'next/image';
import headerImage from '../../public/images/profile/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import TransitionEffect from '@/components/TransitionEffect';

const HomePage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className='pt-0 md:pt-16 sm:pt:8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
           <div className="w-1/2 md:w-full">
            <Image src={headerImage} alt="Samwel Mongare" className="w-full h-auto lg:hidden md:inline-block md:w-full" priority 
              sizes={`
                (max-width: 639px) 100vw,
                (max-width: 767px) 50vw,
                50vw`}
            />
           </div>
           <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText text={"Turning Vision Into Reality With Code And Design"} className='!text-6xl !text-left xl:!text-5xl 
            lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs" >
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest profects and articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2 lg:self-center">
              <Link href="/dummy.pdf" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light
                 hover:text-dark transition-all border-2 border-solid border-transparent
                 md:p-2 md:px-4 md:text-base
                 hover:border-dark dark:text-dark
                 dark:bg-light dark:hover:text-light dark:hover:border-light dark:border-light dark:hover:bg-dark"
                 download="true"
              >Resume <LinkArrow className="w-6 m-1" /></Link>
              <Link href="mailto.abc@gmail.com" target="_blank"
                className="ml-5 flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark
                hover:text-light transition-all border-2 border-solid border-dark hover:border-transparent dark:text-light
               dark:hover:text-light dark:border-light dark:bg-dark md:p-2 md:px-4 md:text-base "
              >Whatsapp</Link>
            </div>
           </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute inline-block right-8 bottom-8 w-24 ">
          <Image src={lightBulb} alt="Light bulb" className="w-full h-auto md:hidden" />
        </div>
      </main>
    </>
  )
}

export default HomePage;