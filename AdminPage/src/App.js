import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Page from './Components/Page';
function App() {
  
  const [credential,setcredential]=useState(false);
  
  function btnhandler(){
    let name= document.getElementById("username").value;
    let password =document.getElementById("password").value;
    if(name=="kartik" && password=="2008"){
      setcredential(true);
    }
    else{
      alert("wrong credentials");
      setcredential(false);
    }
  }
  return (
    <div className='app'>
      <div className='header'>
      <h2>FromMyPen Admin Page</h2>
      </div>
     { credential ? <Page></Page> : <div className='login'>
        <h3>Enter Credentials</h3>  
        <input type="text" id='username' placeholder="Username"></input> 
        <input type="password" id="password" placeholder="Password"></input> <br></br>
        <button onClick={btnhandler}>Enter</button>
      </div> }

    </div>
  );
}

export default App;
