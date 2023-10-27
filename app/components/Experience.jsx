import React, { useRef } from 'react';
import { myExperience } from '../../dataLibrary/myInformation';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]">
      
      <LiIcon reference={ref} />
      <motion.div
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, type: "spring", bounce: "0.25"}}
        // viewport={{once: true}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;<a href={companyLink}
          target="_blank"
          className="text-primary capitalize dark:text-primaryDark "
        >@{company}</a></h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Experience</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div 
          className="absolute w-[4px] h-full bg-dark left-9 top-0 origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{scaleY: scrollYProgress}}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {myExperience.map(({ title, company, companyLink, date, location, description }, index) => (
            <Details key={index} position={title} company={company} companyLink={companyLink} time={date} address={location} work={description} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Experience