import React from 'react'
import Nature from './Nature'
import Author from './Author'
import data from '../data'

export default function Content(props) {
  return (
    <div className='containercontent content-article'>
        <Nature nature={props.nature}> </Nature>
        <h1 className='text-3xl'>{props.title}</h1>
        <Author Date={props.date} ></Author>
        <img src={props.img}></img>
        <p>
        {
          props.content
        }
        </p>
    </div>
  )
}
