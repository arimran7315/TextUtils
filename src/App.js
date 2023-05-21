import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const darkmoderadio = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#121212";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      {/* pass Props Value */}
     
      <BrowserRouter>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        darkmoderadio={darkmoderadio}
      />
      <div className="container my-3">
      
        <Routes>
          <Route path="/" element={<TextForm heading = "Enter your text to analyse" mode ={mode} />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
