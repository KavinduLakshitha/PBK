import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";

export default function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
		<div className="container">
    <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1657794815/Portraits%20By%20Kavindu/3pbk_logo_tqjh3z.png"
            width="auto"
            height="65px"
            alt=""
          />
        </a>
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a className="nav-link" href="/">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/gallery">Gallery</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/pricing">Pricing</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/contact">Contact</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">About</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

  );
}
