import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import Home from "./Home";
// import About from "./About";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loadable from 'react-loadable'

const LoadingComponent = ()=><h3>Loading wait...</h3>

const Home = loadable({
  loader:()=> import('./Home'),
  loading:LoadingComponent
})

const About = loadable({
  loader:()=> import('./About'),
  loading:LoadingComponent
})

function App() {
  const navigate = useNavigate();

  const handleButtonClick1 = () => {
    navigate("/home");
  };
  const handleButtonClick2 = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1 className="error">
        <center>Webpack + React</center>
      </h1>

      <div className="divClass">
        <button onClick={handleButtonClick1}>Home</button>
        <button onClick={handleButtonClick2}>About</button>
      </div>

      <br />

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
