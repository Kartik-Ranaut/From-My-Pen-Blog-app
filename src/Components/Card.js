import React from 'react'
import Nature from './Nature'
import Author from './Author'
export default function Card(props) {
  return (
    <div className='card'>
        <img className='cardimage' src={props.image}></img>
        <Nature nature={props.nature}></Nature>
        <h1 className='text-2xl'>{props.title}</h1>
        <Author Date={props.Date}></Author>
    </div>
  )
}
