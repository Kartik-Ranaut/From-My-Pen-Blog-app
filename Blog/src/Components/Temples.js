import React from 'react'
import Nature from './Nature'
import Author from './Author'
import data from '../data'

export default function Temples() {
  return (
    <div className='content-article'>
        <Nature nature={data[0].nature}> </Nature>
        <h1 className='text-3xl'>{data[0].title}</h1>
        <Author Date={data[0].Date} ></Author>
        <img src={data[0].image}></img>
        <p>
        India is Home to millions of temples which are the places of worship and also the source of economy in the ancient times and some what in modern India also. If we look the architecture of these temples we will find a great similarity between them that helps us to categorise them into three main categories, let’s discuss them in detail…
        <br></br> <br></br>
        <b className='text-xl'>Nagar Architecture :</b> <br></br>
        The temples of this kind of architecture are mainly found in North India.
        This architecture school was developed in 5th century during Gupta Empire.
        The temple is located on stone platform with steps leading to it.
        They are comprises of following
        <ul className='pl'>
            <li><b>Garbhagriha:</b> It is the most sacred place of temple where the main deities are located.</li>
            <li><b>Shikhara:</b> It is the mountain like structure shikara is located on the top of garbhagriha and it is tallest compared to other spire of the temples.</li>
            <li><b>Mandapa: </b> It is a portico for the worshipers and the vahan of the lord is situated in it.</li>
            <li><b>Amalak:</b> It is located at the top of Shikha and holds the kalash.</li>
            <li><b>Kalash: </b> It symbolises the divine presence and is frequently used to sanctify the temple space.</li>
            <li></li>
        </ul>
        
        Further, unlike south India it does not usually have elaborate boundary walls.
        There can be many subdivisions of nagara style temples based on the type of shikara..
        <ul className='pl'>
            <li> <b>Latina or rekha-prasada : </b>It is square base at the bottom and whose walls curve or slope inward to a point top of the shikara. Mostly used for Garbhagriha.</li>
            <li> <b>Phamsana: </b> This is another type in which roofs are composed of various slabs which gradually decrease in size till the top. Mostly used for Mandapa</li>
            <li> <b>Valabhi: </b> It has rectangular base and the roof rises into vaulted chambers.</li>
        </ul>
        <br></br> <br></br>
        <b className='text-xl'>Dravid Architecture:</b> <br></br>
        This is south Indian style of temple architecture
        This school of architecture was developed in 7th century and further developed in 8th century.
        Unlike Nagar style dravidian style temples are not built on raised platform.
        They also have four sided boundary.
        The temple comprises of following:
        <ul className='pl'>
            <li><b>Gopuram: </b>it is the entrance gate for the temple located on middle of all four walls.</li>
            <li><b>Vimana:</b> it is the main tower located on garbagriha.</li>
            <li><b>Shikhra:</b> Shikha in dravidian temples is the crowning element at the top of the viman.</li>
            <li><b>Mandapa:</b> similar to Nagar style temples dravidian temples also have mondapa for the worshipers.</li>
        </ul>
        The dravidian architecture make many advancements in many dynasties following are main two of them:
        <ul className='pl'>
            <li><b>Pallava Architecture: </b> <br></br>
                <b>1.</b>Pallava dynasty ruled the region of south India from 2nd century onwards and they laid the foundation of Dravidian architecture. <br></br>
                <b>2.</b>Although they were Shaivite but Vaishnava monuments were also found in their period. <br></br>
                <b>3.</b>The seventh ruler of Pallava dynasty, Narasimhavarman I, also known as Mamalla, sponsor many buildings and hence most buildings in Mahabalipuram (also called as Mamallapuram in his honour) are attributed to him.
                </li>
            <li><b>Vijayanagara Architecture:</b>
            <br></br>
                    <b>1.</b>Vijayanagar empire is one of the greatest empire of India. 
                    <br></br>
                    <b>2.</b>Many dravidian architecture monuments found their roots in the time of Vijayanagar empire.
                    <b>3.</b>It was founded in 1336AD.<br></br>
                    <b>4.</b>Hampi the capital of Vijayanagar Empire hosts many Dravidian buildings.</li>


        </ul>
        
         

        </p>
    </div>
  )
}
