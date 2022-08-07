import React from 'react'
import './Portfolio.css'

import IMG5 from '../../assests/aws.jpg'



const data=[
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  {
    id:1,
    image: IMG5,
    title: 'Add certificate',
    verfiy:'#',
  },
  
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent</h5>
      <h2>Certificates</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,verfiy}) => {
            return(
              <article key={id} className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
         <div className="portfolio_item-cta">
            <a href={verfiy} className='btn' target='_blank'>Verify</a>
          
         </div>
        </article>
            )
          })
        }

        

        
      </div>
      
      </section>
  )
}

export default Portfolio