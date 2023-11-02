import { usePathname } from "next/navigation"
import { motion } from "framer-motion";
import Link from "next/link"
import { AngelListIcon, DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon, UpworkIcon } from "./Icons"


const CustomLink = ({ href, title, className }) => {
  const pathname = usePathname();
return (
  <Link href={href} className={`${className} relative group mb-2`}>
    {title}
    <span 
    className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
    ease duration-300 ${pathname === href ? "w-full" : "w-0"} dark:bg-light`}
    >&nbsp;</span>
  </Link>
);
}

const DesktopMenu = ({ mode, setMode }) => {
  return (
    <div className="w-full flex justify-between items-center lg:hidden">
      <nav>
        <CustomLink href= "/" title= "Home" className= "mr-8" />
        <CustomLink href= "/about" title= "About" className= "mx-4" />
        <CustomLink href= "/projects" title= "Projects" className= "mx-4" />
        {/* <CustomLink href= "/articles" title= "Articles" className= "ml-4" /> */}
      </nav>
      
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mr-3" whileTap={{scale: 0.9}} href="https://twitter.com/sam_mongare" target="_blank"><TwitterIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-3" whileTap={{scale: 0.9}} href="https://github.com/Mosams" target="_blank"><GithubIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-3" whileTap={{scale: 0.9}} href="https://www.linkedin.com/in/samwel-mongare/" target="_blank"><LinkedInIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 mx-2 rounded-full" whileTap={{scale: 0.9}} href="https://www.upwork.com/freelancers/~017927a169e62dec08?viewMode=1" target="_blank"><UpworkIcon /></motion.a>
        <motion.a whileHover={{
          y: -2
        }} className="w-6 p-1 ml-3 dark:bg-light/75 rounded-full" whileTap={{scale: 0.9}} href="https://wellfound.com/u/samwel-mongare" target="_blank"><AngelListIcon /></motion.a>

        <button
         onClick={() => setMode(mode === "light" ? "dark" : "light")}
         className={`${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"} ml-3 flex items-center justify-center rounded-full p-1`}
        >
          {
            mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )
          }
        </button>
      </nav>
    </div>
  )
}

export default DesktopMenu