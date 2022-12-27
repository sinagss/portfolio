import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaDribbbleSquare, FaGithubSquare} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        {/* Linkedin Icon */}
        <a href="https://www.linkedin.com/in/maryam-tahbaz-283868119?originalSubdomain=ir" target="_blank" rel="noreferrer"><BsLinkedin/></a>

        {/* Github Icon */}
        <a href="http://github.com" target="_blank" rel="noreferrer"><FaGithubSquare/></a>

        {/* Dribble Icon */}
        <a href="http://dribble.com" target="_blank" rel="noreferrer"><FaDribbbleSquare/></a>
    </div>
  )
}

export default HeaderSocials