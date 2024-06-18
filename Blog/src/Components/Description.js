import React from 'react'
import Nature from './Nature'
import Author from './Author'
export default function Description({name,Date,title,nature}) {
  return (
    <div className='descriptiontab'>
      <Nature nature={nature}></Nature>
      <h1 className='titledescription'>{title}</h1>
      <Author Date={Date}></Author>
    </div>
  )
}
