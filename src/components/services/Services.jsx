import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
     <h5>My </h5>
      <h2>Projects</h2>
      <div className='cointainer service_container'>
        <article className="services">
          <div className="service_head">
            <h3>Project name</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>ecplainline1 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line2 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> explain line3</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line4 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="#linkofproject" target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        {/* END OF ANOHTET */}
        <article className="services">
          <div className="service_head">
            <h3>Project name</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>ecplainline1 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line2 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> explain line3</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line4 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="#linkofproject" target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        {/* end of one UI */}
        <article className="services">
          <div className="service_head">
            <h3>Project name</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>ecplainline1 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line2 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p> explain line3</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p>explain line4 </p>
            </li>
            <li>
              <BiCheck className='service_list-icon'></BiCheck>
              <p><a href="#linkofproject" target='_blank' >  Click here for demo </a></p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services