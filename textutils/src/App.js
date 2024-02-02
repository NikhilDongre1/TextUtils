import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import About from "./Components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  const togglecolor = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#191919";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <div className="container"></div>
      <Router>
        <Navbar mode={mode} togglemode={togglecolor} title="TextUtils" details="Home section"/>
        <Routes>
          <Route path="/" element= {<Textform heading="Enter the text to analyze" mode={mode} />} />
          <Route path="/about" element= {<About />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
