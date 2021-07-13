import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Skills from './components/Skills/Skills'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    document.getElementById("title").innerHTML = "HarshSingh";
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Skills/>
      </Router>
    </div>
  );
}

export default App;
