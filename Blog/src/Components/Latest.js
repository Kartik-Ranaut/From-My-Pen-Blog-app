import React from 'react' 
import {useState,useEffect} from 'react'
import Content from './Content'

export default function Latest() {
  const [datann,setdata]=useState([{content:"loading..",title:"loading..",date:"hh"},]);
  const [idx,setidx]=useState(0);
  const call= async()=>{
    let data= await fetch('http://localhost:4000/api/posts');
    let datan= await data.json();
    setdata(datan.data);
    console.log(datan.data);
    let date=datan.data[0].date;
    let id=datan.data[0]._id;
    for(let i=0;i<datan.data.length;i++){
      if(datan.data[i].date>date){
        date=datan.data[i].date;
        id=datan.data[i]._id;
      }
    }
    for(let i=0;i<datan.data.length;i++){
      if(datan.data[i]._id==id){
        setidx(i);
        return;
      }
    }
};

useEffect(()=>{
    call();
},[])
  return (
    <Content content={datann[idx].content} title={datann[idx].title} img={datann[idx].img} date={datann[idx].date} nature={datann[idx].nature}></Content> 
  )
}
