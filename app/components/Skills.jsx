import { motion } from 'framer-motion';
import { mySkills } from '../../dataLibrary/myInformation';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      px-6 py-3 absolute shadow-dark cursor-pointer dark:bg-light dark:text-dark
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 sm:text-xs sm:py-1 sm:px-2 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      initial={{x:0, y:0}}
      whileHover={{scale: 1.05}}
      whileInView={{x: x, y: y, transition:{ duration: 1.5 } }}
      viewport= {{ once: true }}
      >
        {name}
      </motion.div>
  )
};

const Skills = () => {
  return (
    <>
     <h2 className="font-bold text-8xl mt-60 w-full text-center lg:mb-4 md:mt-32">Skills</h2>
     <div className="w-full h-screen lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] flex relative items-center justify-center
      rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm ">

      <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8
      shadow-dark cursor-pointer dark:hover:bg-light dark:hover:text-dark dark:bg-light dark:text-dark
      lg:p-6 md:p-4 xs:text-xs xs:p-2 xs:font-bold"
      whileHover={{scale: 1.05}}
      >
        Web
      </motion.div>
      {
        mySkills.map((skill, index) => (
          <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
        ))
      }
     </div>
    </>
  )
}

export default Skills