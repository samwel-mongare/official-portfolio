import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-[45] bg-dark
        flex justify-center items-center text-9xl text-light font-bold uppercase
      " 
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.h1
      initial={{ x: "100%", width: "100%" }}
      animate={{ x: 0, width: 0, opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      >KENYA</motion.h1>
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light" 
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.1, duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[red]" 
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light" 
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.3, duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[green]" 
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: 0, width: 0 }}
        transition={{ delay:0.4, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  )
}

export default TransitionEffect