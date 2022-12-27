import React from "react";
import "./nav.css";
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home')
  const checkActiveNave = (activeNav, tag) => {return activeNav === tag? tag: ''}

  function changeActiveNav(tag) {

  }

  return (
    <nav>
      {/* Home button */}
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home"? 'active':''}><AiOutlineHome /></a>

      {/* About button */}
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about"? 'active':''}><AiOutlineUser /></a>

      {/* Experience button */}
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience"? 'active':''}><BiBook /></a>

      {/* Services button */}
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services"? 'active':''}><RiServiceLine /></a>

      {/* Contact button */}
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact"? 'active':''} ><BiMessageSquareDetail /></a>
    </nav>
  )
};

export default Nav;
