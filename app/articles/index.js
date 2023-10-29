"use client"

import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { motion, useMotionValue } from 'framer-motion';
import { useRef } from 'react';
import myArticles from '../dataLibrary/myArticles';

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:border-light dark:bg-dark">
      
      <div className="absolute top-0 -right-3.5 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark" />

      <Link href={`${link}`} target="_blank"
       className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
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

      <Link href={`${link}`} target="_blank">
        <h2 className="text-2xl capitalize font-bold my-2 mt-4 cursor-pointer hover:underline xs:text-lg ">{title}</h2>
      </Link>

      <p className="text-sm mb-2">
        {summary}
      </p>
      <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
    </li>
  )
}

const MovingImg = ({ img, title, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  const handleMouse = (e) => {
    imgRef.current.style.display = 'inline-block';
    x.set(e.pageX)
    y.set(-10);
  }

  const handleMouseLeave = () => {
    imgRef.current.style.display = 'none';
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={`${link}`} target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl capitalize font-semibold cursor-pointer hover:underline">{title}</h2>
      <FramerImage ref={imgRef} src={img} alt={title} className="w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden" 
        style={{ x, y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      />
    </Link>
  )
}

const Article = ({ title, img, link, date }) => {
  return (
    <motion.li 
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.3 }, ease: 'easeInOut', delay: 0.2 }}
    viewport = {{ once: true }}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex item-center
    justify-between bg-light text-dark first:mt-0 border border-solid border-dark 
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light 
    sm:flex-col">
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
    </motion.li>
  )
}

const articles = () => {
  return (
    <>
      <Head>
        <title>Samwel | Articles Page</title>
        <meta name="description" content="Sammy Mongare is a software developer and a tech enthusiast. He is a self-taught developer who is passionate about web development and mobile development." />
      </Head>

      <main className="w-full mb-16 flex flex-col justify-center items-center overflow-hidden dark:text-light">
        <Layout className='pt-16'>
          <AnimatedText text={"Words Can Change The World"} className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            {
              myArticles.map((article, index) => (
                article.type === 'Featured Article' && (
                <FeaturedArticle
                  key={index}
                  img={article.img}
                  title={article.title}
                  time={article.time}
                  summary={article.summary}
                  link={article.link}
                />
              )
              ))
            }
          </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
            
            <ul>
            {
              myArticles.map((article, index) => (
                article.type === 'Article' && (
                <Article
                  key={index}
                  title={article.title}
                  img={article.img}
                  link={article.link}
                  date={article.date}
                />
              )
              ))
            }
          </ul>
        </Layout>
      </main>
    </>
  )
}

export default articles