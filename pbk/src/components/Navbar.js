import React from "react";
import {Link} from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
/* import "../styles/navbar.css"; */

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container">
    	<Link to="/" className="navbar-brand">
          <img
            src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1657794815/Portraits%20By%20Kavindu/3pbk_logo_tqjh3z.png"
            width="auto"
            height="65px"
			className="logo"
            alt=""
          />
        </Link>
			
			<div className="tel">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<a href="tel:0713037712" className="nav-link" style={{color:"#2F4F4F"}}>
					<i class="fa-solid fa-mobile-screen-button"></i>
					&nbsp;&nbsp;+94 713 037 712</a>
				</ul>
			</div>
		
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					
					<li className="nav-item">
						<Link to="/" className="nav-link" >Home</Link>
					</li>
					<li className="nav-item">
						<Link to="/gallery"className="nav-link" >Gallery</Link>
					</li>
					<li className="nav-item">
						<Link to="/pricing" className="nav-link" >Pricing</Link>
					</li>
					<li className="nav-item">
						<Link to="/contact" className="nav-link" >Contact</Link>
					</li>
					<li className="nav-item">
						<Link to="/about" className="nav-link" >About</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>

  );
}
