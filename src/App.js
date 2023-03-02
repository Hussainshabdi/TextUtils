// import logo from './logo.svg';
import "./App.css";
// import Btn from "./components/Button";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import About from "./components/About";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Contact from "./components/Contact";

// import { BrowserBrowserRoutes,Routes,Route,Link } from "react-BrowserRoutes-dom";

function App() {
  const [Mode,setDarkMode] = useState('dark');
  // const [dark,setDark] = useState('dark');
    
  function Model(){
    setDarkMode('dark');
    // setDark('light');
  }
  return (
    <BrowserRouter>
      <div className="Container" >
        <Navbar name="TextifyMe"  mode={Mode} fun={Mode}/>
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Form />}>
            </Route>
            <Route path="about" element={ <About />}>
            </Route>
            <Route path="contact" element={ <Contact />}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
