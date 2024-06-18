import React from 'react';
import Nature from './Nature';
import {useState} from 'react';
import Author from './Author';
import Content from './Content';
export default function Card(props) {
  const [disply,setdisplay]=useState(false);

  function display(){
    setdisplay(true);
  }
  return (
    <div className='card' onClick={display} >
        {disply ? <Content content={props.content} title={props.title} img={props.img} date={props.date} nature={props.nature}></Content>: <div></div>}
        <img className='cardimage' src={props.img}></img>
        <Nature nature={props.nature}></Nature>
        <h1 className='titleofcard'>{props.title}</h1>
        <Author Date={props.date}></Author>
    </div>
  )
}
