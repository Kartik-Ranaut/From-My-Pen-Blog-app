import React, { useEffect, useState } from 'react'

export default function () {
    const [formm,setform]=useState(false);
    const [tablee,settable]=useState(true);
    const [ddta,setddta]=useState('Add New Blog');

    function bbtnhandler(){
        setform(!formm);
        settable(!tablee);
       
    }
    function btnhandler(){
        setform(!formm);
        settable(!tablee);
    }
    const createContent = async()=>{
        let content= document.getElementById("content").value;
        let title= document.getElementById("title").value;
        let image= document.getElementById("image").value;
        let nature= document.getElementById("nature").value;

        let jsonData={
            'title':title,
            'content':content,
            'img':image,
            'nature':nature,
            'date':Date.now()
        }
        let response = fetch('http://localhost:4000/api/create',{
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json' 
                },
             body: JSON.stringify(jsonData) 
        })
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
          })
          .then(data => {
            alert("data entered");
            call();
            // Handle the JSON data
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
          });
    }

    const [datann,setdata]=useState();
    function deletefn(_id){
        console.log(_id)
        let jsonData={
            '_id':_id,
        }
        let response = fetch('http://localhost:4000/api/delete',{
            method: 'DELETE',
            headers: {
                    'Content-Type': 'application/json' 
                },
             body: JSON.stringify(jsonData) 
        })
        .then(response => {
            // Check if the request was successful
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // Parse the response as JSON
            return response.json();
          })
          .then(data => {
            call();
            alert("data deleted");
            // Handle the JSON data
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('Fetch error:', error);
          });
    }
    const call= async()=>{
        let data= await fetch('http://localhost:4000/api/posts');
        let datan= await data.json();
        setdata(datan.data);
        console.log(datan.data);
    };

    useEffect(()=>{
        call();
    },[])

     return (
        <div className='page'>
        <div className='sidebar'>
            <button onClick={bbtnhandler}>Add Blog</button>
            <button onClick={btnhandler}>All Blogs</button>
        </div>
        <div className='rightbar'>
        {formm && <div className='form'>
            <input type="text" placeholder='Title' id="title"></input>
            <input type='text' id="image" placeholder='Image URL'></input>
            <textarea type="text" placeholder='Content' id="content"></textarea>
            <input type='text' placeholder='Nature' id='nature'></input>
            <button onClick={createContent}>Submit</button>
        </div>}

        {tablee && <table cellSpacing={45}>
        <tr>
            <th>Content</th>
            <th>Title</th>
            <th>Nature</th>
            <th>Action</th>
        </tr>
            {
                datann?.map((element)=>(
                    
                    <tr className='bottom'>
                    <td>`{element.content.substring(0,20)}.....`</td>
                    <td>{element.title}</td>
                    <td className='color' >{element.nature}</td>
                    <td><button onClick={()=>{deletefn(element._id)}}>Delete</button></td>
                    </tr>
                    
                ))
            }
        </table>}
        </div>

        </div>
        )
}
