import React from 'react'
import Description from './Description'
export default function Home({name,id,Date,title,image,nature}) {
    
  return (
    <div className='homepage'>
        <img className='homeimage' src={image} ></img>
        <Description title={title} name={name} Date={Date} nature={nature}></Description>
    </div>
  )
}
