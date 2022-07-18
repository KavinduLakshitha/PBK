import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";

export default function Navbar() {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
		<div class="container">
    <a class="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1657794815/Portraits%20By%20Kavindu/3pbk_logo_tqjh3z.png"
            width="auto"
            height="65px"
            alt=""
          />
        </a>
      <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="/">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/gallery">Gallery</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/pricing">Pricing</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/contact">Contact</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="/about">About</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>

  );
}
