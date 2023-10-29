"use client"

import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import profilePic from '../assets/images/profile/developer-pic-2.png';
import Skills from "@/components/Skills";
import { myBiography } from "../dataLibrary/myInformation";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedNumbers from "@/components/AnimatedNumbers"

const About = () => {
  return (
    <>
      <Head>
        <title>Samwel | About Page</title>
        <meta name="description" content="About Samwel Mongare. Kenyan background and experience as a software developer" />
      </Head>

      <main className='flex w-full flex-col items-center justify-center
      dark:text-light
      '>
        <Layout className="pt-16">
        <AnimatedText text={"Passion Fuels Purpose"} className='mb-16 lg:!text-6xl sm:!text-5xl xs:!text-4xl sm:mb-8' />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          <div className="col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
            <h2 className="text-large font-bold uppercase mb-4 text-dark/75 dark:text-light/75 ">Biography</h2>
            <p className="font-medium text-lg 2xl:text-base">
             {myBiography[0]}
            </p>

            <p className="font-medium my-4 text-lg 2xl:text-base">
              {myBiography[1]}
            </p>

            <p className="font-medium text-lg 2xl:text-base">
              {myBiography[2]}
            </p>
          </div>
          <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-6
          
          dark:bg-dark dark:border-light dark:text-dark xl:col-span-4 md:order-1 md:col-span-8
          ">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image src={profilePic} alt="Samwel Mongare" className="w-full h-auto rounded-2xl" priority 
              sizes={`
                (max-width: 767px) 80vw,
                (max-width: 1200px) 40vw,
                25vw`} />
          </div>
            <div className="col-span-2 flex flex-col items-end justify-between h-3/4 xl:flex-row xl:col-span-8
             xl:h-auto xl:items-center md:order-3"> 
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Satisfied clients</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Projects Completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>               
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">Years of Experience</h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default About