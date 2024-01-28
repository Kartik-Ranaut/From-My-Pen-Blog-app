import React, { useState } from 'react';
import Card from './Card';
import data from '../data'
export default function Blog(props) {
  function blogclick(id){
    if(id==1){
      props.templeHandler();
    }
    if(id==2){
      props.VandeMataramHandler();
    }
  }
  return (
  <div className='blogsec'>
    {
        data.map((element)=>{
        return <Card {...element} blogclick={blogclick}></Card>
      })
    }
    </div>
  )
}
