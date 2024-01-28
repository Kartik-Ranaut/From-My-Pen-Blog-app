import "./App.css";
import {useEffect, useState} from 'react';
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Latest from "./Components/Latest";
import Contact from "./Components/Contact";
import Temples from "./Components/Temples";
import VandeMataram from "./Components/VandeMataram";
import data from "./data";
function App() {
  const [selectHome,setHome]=useState(true);
  const [selectBlog,setBlog]=useState(false);
  const [selectLatest,setLatest]=useState(false);
  const [selectContact,setContact]=useState(false);
  const [selectTemple,setTemple]=useState(false);
  const [selectVandemataram,setVandemataram]=useState(false);

  const [themeimage,setthemeimage]=useState(<i class="fa-solid fa-moon"></i>);
  const dataji=data[0];
  function turnAllFalse(){
    setBlog(false);
    setHome(false);
    setLatest(false);
    setContact(false);
    setTemple(false);
    setVandemataram(false);

  }
  function templeHandler(){
    turnAllFalse();
    setTemple(true);
  }
  function VandeMataramHandler(){
    turnAllFalse();
    setVandemataram(true);
  }
  function homeHandler(){
    turnAllFalse();
    setHome(true);
  }
  function blogHandler(){
    turnAllFalse();
    setBlog(true);
  }
  function latestHandler(){
    turnAllFalse();
    setLatest(true);
  }
  function contactHandler(){
    turnAllFalse();
    setContact(true);
  }
  const [theme,setTheme]=useState("lightmode");
  function changetheme(){
    if(theme==="darkmode"){
      setTheme("lightmode");
      setthemeimage(<i class="fa-solid fa-moon"></i>);
    }
    else{
      setTheme("darkmode");
      setthemeimage(<i class="fa-regular fa-sun"></i>);
    }
  }
  useEffect(()=>{
    document.body.className=theme;
  },[theme])
  return (
    <div className="app">
      <div className="mobileview flex justify-evenly w-4/12 text-xl cursor-pointer">
          <a onClick={homeHandler}>
          <i class="fa-solid fa-house"></i>
          <h6>Home</h6></a>
          <a onClick={blogHandler}>
          <i class="fa-solid fa-blog"></i>
          <h6>Blog</h6></a>
          <a onClick={latestHandler}>
          <i class="fa-solid fa-bolt"></i>
          <h6>Latest</h6></a>
          <a onClick={contactHandler}>
          <i class="fa-solid fa-address-card"></i>
          <h6>Contact</h6></a>
      </div>
      <div className="header">
        <div className="weblogo"></div>
        <div className="Links flex justify-between w-4/12 text-xl cursor-pointer ">
          <a onClick={homeHandler}>Home</a>
          <a onClick={blogHandler}>Blog</a>
          <a onClick={latestHandler}>Latest</a>
          <a onClick={contactHandler}>Contact</a>
        </div>
        <div className="search">
          <input className="srch" type="text" placeholder="search"></input>
          <button className="themechangebtn" onClick={changetheme}>{themeimage}</button>
        </div>
      </div>
      <div className="container">
        {selectHome && <Home {...dataji}></Home>}
        {selectBlog && <Blog templeHandler={templeHandler} VandeMataramHandler={VandeMataramHandler}></Blog>}
        {selectLatest && <Latest></Latest>}
        {selectContact && <Contact></Contact>}
        {selectTemple && <Temples></Temples>}
        {selectVandemataram && <VandeMataram></VandeMataram>}
      </div>
    </div>
  );
}

export default App;
