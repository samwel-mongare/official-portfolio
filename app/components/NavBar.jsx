"use client"

import { useState } from "react";
import Logo from "./Logo"
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [ mode, setMode ] = useThemeSwitcher();
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10
    lg:px-16 md:px-12 sm:px-8">

    <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm 
       ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
      <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm
      ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
    </button>


      <DesktopMenu mode={mode} setMode={setMode} isOpen={isOpen} />
      <MobileMenu mode={mode} setMode={setMode} isOpen={isOpen} handleClick={handleClick} />

      <div className="absolute left-[50%] md:left-[38%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  )
}

export default NavBar;