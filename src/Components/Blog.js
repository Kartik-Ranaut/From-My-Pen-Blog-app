import React, { useState } from 'react';
import Card from './Card';
import data from '../data'
export default function Blog() {

  return (
  <div className='blogsec'>
    {
        data.map((element)=>{
        return <Card {...element}></Card>
      })
    }
    </div>
  )
}
