"use client"

import { AnimatePresence, motion } from "framer-motion"
import TransitionEffect from "./components/TransitionEffect"

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 200, y: 0 },
}

export default function Template({ children }) {
  return (
    // <AnimatePresence mode='wait'>
    //   <TransitionEffect />
    //   {children}
    // </AnimatePresence>
    <AnimatePresence mode="wait" initial={true}>
      <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ ease: "easeInOut" }}
      className="flex items-center text-dark w-full min-h-screen dark:text-light"
    >
      {children}
    </motion.main>
    </AnimatePresence>
  )
}