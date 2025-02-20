import React from 'react';
import Logo from '../assets/logo.png';
import {useState,useEffect} from "react";



export const Header = () => {

  const[theme,setTheme] = useState(JSON.parse(localStorage.getItem("theme")) || "medium");
  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  },[theme]);
  return (
    <header>
        <div className='logo'>
            <img src={Logo} alt="TaskMate Logo"/>
            <span>TaskMate</span>
        </div>
        <div className="themeSelector">
          <span onClick={()=> setTheme("light")} className={theme==="light" ? "light activeTheme": "light"}></span>
          <span onClick={()=> setTheme("medium")} className={theme==="medium" ? "light activeTheme": "medium"}></span>
          <span onClick={()=> setTheme("dark")} className={theme==="dark" ? "light activeTheme": "dark"}></span>
          <span onClick={()=> setTheme("gOne")} className={theme==="gOne" ? "light activeTheme": "gOne"}></span>
          <span onClick={()=> setTheme("gTwo")} className={theme==="gTwo" ? "light activeTheme": "gTwo"}></span>
          <span onClick={()=> setTheme("gThree")} className={theme==="gThree" ? "light activeTheme": "gThree"}></span>


        </div>


    </header>
  )
}
