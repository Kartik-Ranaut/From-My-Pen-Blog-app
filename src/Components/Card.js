import React from 'react'
import Nature from './Nature'
import Author from './Author'
export default function Card(props) {
  function blogClickHandler(){
    props.blogclick(props.id);
  }
  return (
    <div className='card' onClick={blogClickHandler}>
        <img className='cardimage' src={props.image}></img>
        <Nature nature={props.nature}></Nature>
        <h1 className='text-2xl'>{props.title}</h1>
        <Author Date={props.Date}></Author>
    </div>
  )
}
