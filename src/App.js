import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js"
import AboutUs from "./pages/aboutUs/AboutUs.js";
import Solutions from "./pages/solutions/Solutions.js";
import Services from "./pages/services/Services.js";
import Projects from "./pages/projects/Projects.js";
import Contact from "./pages/contact/Contact.js";
import Nav from "./components/nav/Nav.js"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/nosotros" element={<AboutUs />} />
            <Route path="/soluciones" element={<Solutions />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
