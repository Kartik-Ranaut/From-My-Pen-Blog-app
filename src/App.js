import "./App.css";
import {useState} from 'react';
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Latest from "./Components/Latest";
import Contact from "./Components/Contact";
import data from "./data";
function App() {
  const [selectHome,setHome]=useState(true);
  const [selectBlog,setBlog]=useState(false);
  const [selectLatest,setLatest]=useState(false);
  const [selectContact,setContact]=useState(false);
  const dataji={
      id:1,
      name:'Kartik Ranaut',
      Date:'January 4, 2024',
      title:'Architecture style of Indian temples',
      nature:"Architecture",
      image:"https://img.veenaworld.com/wp-content/uploads/2021/02/10-Famous-South-Indian-Temples-You-Should-Not-Miss.jpg"
  };
  function turnAllFalse(){
    setBlog(false);
    setHome(false);
    setLatest(false);
    setContact(false);
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

  return (
    <div>
      <div className="header flex justify-between w-100vh pl-7 pr-7">
        <div className="weblogo"></div>
        <div className="Links flex justify-between w-4/12 text-xl cursor-pointer ">
          <a onClick={homeHandler}>Home</a>
          <a onClick={blogHandler}>Blog</a>
          <a onClick={latestHandler}>Latest</a>
          <a onClick={contactHandler}>Contact</a>
        </div>
        <div className="search">
          <input type="text" placeholder="search"></input>
        </div>
      </div>
      <div className="Container">
        {selectHome && <Home {...dataji}></Home>}
        {selectBlog && <Blog></Blog>}
        {selectLatest && <Latest></Latest>}
        {selectContact && <Contact></Contact>}
      </div>
    </div>
  );
}

export default App;
