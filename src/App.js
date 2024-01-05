import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <div className="wblogo"></div>
        <div className="Links">
          <a>Home</a>
          <a>Blog</a>
          <a>Latest</a>
          <a>Contact</a>
        </div>
        <div className="search">
          <input type="text" placeholder="search"></input>
        </div>
      </div>
      <div className="Container"></div>
    </div>
  );
}

export default App;
