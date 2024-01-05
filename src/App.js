import "./App.css";
import {useState} from 'react';
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Latest from "./Components/Latest";
import Contact from "./Components/Contact";
function App() {
  const [selectHome,setHome]=useState(true);
  const [selectBlog,setBlog]=useState(false);
  const [selectLatest,setLatest]=useState(false);
  const [selectContact,setContact]=useState(false);
  
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
        {selectHome && <Home></Home>}
        {selectBlog && <Blog></Blog>}
        {selectLatest && <Latest></Latest>}
        {selectContact && <Contact></Contact>}
      </div>
    </div>
  );
}

export default App;
