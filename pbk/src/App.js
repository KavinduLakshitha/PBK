import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import './styles/App.css'

import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">

      {/* Helmet */}
        
        {/* <Helmet>
          <meta charSet="utf-8" />
          <title>Portraits by Kavindu</title>
          <link rel="canonical" href="/" />
        </Helmet> */}

      <Navbar/>
      <Footer/>
      
      <BrowserRouter>

      <Routes>

      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/gallery" element={<Gallery/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/about" element={<About/>}></Route>

      </Routes>

      </BrowserRouter>
        
    
    </div>
  );
}

export default App;
