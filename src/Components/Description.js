import React from 'react'
import Nature from './Nature'
import Author from './Author'
export default function Description({name,Date,title,nature}) {
  return (
    <div className='descriptiontab'>
      <Nature nature={nature}></Nature>
      <h1 className='text-3xl'>{title}</h1>
      <br></br>
      <br></br>
      <Author Date={Date}></Author>
    </div>
  )
}
