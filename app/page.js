"use client"

import Image from 'next/image'
import HomePage from './components/Home'
import Layout from './components/Layout'
import AnimatedText from './components/AnimatedText'
import AnimatedNumbers from './components/AnimatedNumbers'
import ServicesHome from './components/ServicesHome'

export default function Home() {
  return (
    <>
     {/* <HomePage /> */}
      <main className=' w-full h-full inline-block z-0 bg-light p-2 pr-24
       dark:bg-dark dark:text-light'>
        <div className='grid w-full grid-cols-12 gap-4 sm:gap-2'>
          <div className='col-span-3'>
           
  <div class="w-full max-w-sm min-h-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
        <Image 
          width={540} height={540}
          class="w-24 h-24 mb-3 rounded-full shadow-lg" 
          src="/images/profile/developer-pic-2.jpg" 
          alt="Bonnie image"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Samwel Mongare</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Software Engineer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Resume</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">WhatsApp</a>
        </div>
      </div>
    </div>

          </div>
          <div className='col-span-9 flex flex-col justify-start h-screen items-start xl:col-span-4 md:order-2 md:col-span-8'>
          <AnimatedText text={"Turning Vision Into Reality With Code And Design"} className='!text-4xl !text-left xl:!text-5xl 
            lg:!text-center lg:!text-xl md:!text-4xl sm:!text-3xl mb-4' />
          <div className='flex flex-row gap-5'>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6
          
          dark:bg-dark dark:border-light dark:text-dark xl:col-span-4 md:order-1 md:col-span-8
          ">
            <div className="absolute top-0 -right-1 -z-10 w-[101%] h-[101%] rounded-[1rem] bg-dark dark:bg-light" />
            <Image src='/images/profile/developer-pic-2.jpg' alt="Samwel Mongare" width={500} height={500} className="w-full h-auto rounded-2xl" priority 
              sizes={`
                (max-width: 767px) 100vw,
                (max-width: 1200px) 50vw,
                33vw`} />
          </div>
            <div className='col-span-4 pl-4 dark:border-light rounded-2xl border-2 border-solid'>
            <p className="my-4 text-base font-medium md:text-sm sm:text-xs" >
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest profects and articles, showcasing my expertise in React.js and web development.
            </p>
            </div>
          </div>
          <ServicesHome />
          </div>
        </div>
      </main>
    </>
  )
}
