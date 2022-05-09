import React from 'react'

const Produce = ({id,title,price,description,category,img,rating}) => {
  return (
    <div className='dataitem'>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>price: {price}</p>
        <p>description: {description}</p>
        <p>category: {category}</p>
        <p>imgaine: {img}</p>
        <p>rating: {rating}</p>
    </div>
  )
}

export default Produce