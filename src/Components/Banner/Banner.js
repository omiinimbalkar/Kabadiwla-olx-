import React from 'react'
import Arrow from '../assets/Arrow'
import './Banner.css'
function Banner() {
  const categoriesItems = ['Bundle of Newsapapers', 'PLasticBottles', 'Plastic Bags', 'For Sale: old books & plastic things', 'Steels things', 'For Buy: A second hand Table,showpiece,bed etc'];


  return (
    <div className='banner'>
      <div className="category-list">

        <div className='categories'>
          <h4>ALL CATEGORIES</h4>
          <Arrow />
        </div>
        <div className="items">
          {categoriesItems.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
      <div className="image">

      </div>
    </div>
  )
}

export default Banner