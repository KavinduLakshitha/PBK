import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";



export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white" >
      <div className="nav-logo">
        <a class="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1657794815/Portraits%20By%20Kavindu/3pbk_logo_tqjh3z.png"
            width="auto"
            height="65px"
            alt=""
          />
        </a>
      </div>
      <div className="nav-toggler">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse flex-grow-1 text-right" id="navbarNav">
          <ul class="navbar-nav ms-auto flex-nowrap">
            <li class="nav-item">
              <a class="nav-link" href="/">
              Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/pricing">
              Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About Me
              </a>
            </li>
          </ul>
        </div>
    </nav>
  );
}
