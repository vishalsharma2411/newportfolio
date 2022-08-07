import React from 'react'
import './Header.css'
import CTA from './CTA';
import ME  from '../../assests/imageface.png';

import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>VISHAL SHARMA</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA></CTA>
        <HeaderSocials></HeaderSocials>
        <div className='me' >
        < img className='image' src={ME} alt="me" />
        </div>
        
        
        <a href='#contact' className='scroll_down'>Scroll Down</a>



      </div>
    </header>
  )
}

export default Header