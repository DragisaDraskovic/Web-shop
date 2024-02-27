import React from 'react'

import './Card.css'

const Card = ({ product }) => {
  return (
    <>
    <div className='shopCardContainer' key={product.id}>
    <img className='shopCardImage' src={product.image}/>
        <div className='shopDescriptionContainer'>
            <p>{product.title.substring(0,25)}...</p>
            <p className='shopCardPrice'>{product.price}$</p>
            <button className='showMoreButton'>Show More</button>
        </div>
    </div>
  </>
  )
}

export default Card