"use client"

import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icons';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import myProjects from '../dataLibrary/myProjects';
import { motion } from 'framer-motion';

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid
     border-dark bg-light relative shadow-2xl p-12 rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">

      <div className="absolute top-0 -right-3.5 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2
       sm:h-[102%] xs:w-[100%] xs-rounded-[1.5rem]" />
      <Link href={`${link}`} target="_blank"
       className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>

        <Link href={`${link}`} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
     
        <div className="mt-2 flex items-center">
          <Link href={`${github}`} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link href={`${link}`} target="_blank" className="ml-4 rounded bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light
           dark:text-dark sm:px-4 sm:text-base">
            Live Demo
          </Link>
        </div>
      </div>
    </article>
  )
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid
      border-dark bg-light shadow-2xl p-6 relative flex-col dark:bg-dark dark:border-light xs:p-4">

        <div className="absolute top-0 -right-3.5 -z-10 w-[101%] h-[103%] rounded-[2rem]
         rounded-br-3xl bg-dark dark:bg-light md:-right-2 xs:h-[102%] md:w-[101%] xs-rounded-[1.5rem]" />
        <Link href={`${link}`} target="_blank"
       className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage src={img} alt={title} className="w-full h-auto" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          priority 
              sizes={`
                (max-width: 767px) 100vw,
                (max-width: 1200px) 50vw,
                50vw`}
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link href={`${link}`} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
         <Link href={`${link}`} target="_blank" className="underline text-lg font-semibold dark:text-light md:text-base">
            Visit
          </Link>

          <Link href={`${github}`} target="_blank" className="w-8 dark:text-light md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Samwel | Projects Page</title>
        <meta name="description" content="Projects are the best way to learn. Here are some of my projects that I have built over the years." />
      </Head>
      
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text="Imagination Trumps Knowledge" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">            
            {
              myProjects.map((project, index) => {
                if (project.type === 'Project') {
                  return (
                    <div key={`${project.title}-${index}`} className="col-span-6 sm:col-span-12">
                      <Project
                        key={index}
                        type={project.type}
                        title={project.title}
                        img={project.image}
                        link={project.link}
                        github={project.github}
                      />
                    </div>
                  )
                } else {
                  return (
                    <div key={`${project.title}-${index}`} className="col-span-12">
                      <FeaturedProject
                        key={index}
                        type={project.type}
                        title={project.title}
                        summary={project.summary}
                        img={project.image}
                        link={project.link}
                        github={project.github}
                      />
                  </div>
                  )
                }
              })
            }
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects