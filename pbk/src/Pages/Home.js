import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";

import Slider from "../components/Slider";

export default function Home() {
  return (
    <div className="container">
      <Slider/>
    </div>
    
    
  );
}
