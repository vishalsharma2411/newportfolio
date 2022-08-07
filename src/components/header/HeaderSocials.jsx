import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiCodechef} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='#' target="_blank"><BsLinkedin/></a>
        <a href='#' target="_blank"><FaGithub></FaGithub></a>
        <a href='#' target="_blank"><SiCodechef></SiCodechef></a>
        <a href='#' target="_blank"><SiLeetcode></SiLeetcode></a>
    </div>
  )

}

export default HeaderSocials