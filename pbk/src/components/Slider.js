import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/slider.css"

export default function () {
  return (
    <div>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        
      {/* Indicators */}
        
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className="active"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>


        <div className="carousel-inner">
          
          {/* Carousel Item 1 */}

          
            <div className="carousel-item">
            
                <img
                  className="bd-placeholder-img-1"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false">
                </img>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1 style={{fontWeight:"bold" ,  letterSpacing: "1px"}}>Let's Talk!.</h1>
                  <p>
                    Be critical! Be creative!
                  </p>
                  <p>
                    <a className="btn btn-md btn-dark" href="/contact">
                      Leave a Message
                    </a>
                  </p>
                </div>
              </div>
            </div>
          
          
          {/* Carousel Item 2 */}

          
            <div className="carousel-item active">
              <img
                className="bd-placeholder-img-2"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false">
            
              </img>
              <div className="container">
                <div className="carousel-caption">
                  <h1 style={{fontWeight:"bold" ,  letterSpacing: "1px"}}>Hi there!</h1>
                  <p>
                  Welcome to Portraits by Kavindu! I am glad you are here... <br/>Let's take a tour...
                  </p>
                </div>
              </div>
            </div>
          
          
          {/* Carousel Item 3 */}
          
          
            <div className="carousel-item">
              <img
                className="bd-placeholder-img-3"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false">
            
              </img>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1 style={{fontWeight:"bold" ,  letterSpacing: "1px"}}>Looking for something relastic?</h1>
                  <p>
                  “I sometimes think there is nothing so delightful as drawing.” - Vincent van Gogh -
                  </p>
                  <p>
                    <a className="btn btn-md btn-dark" href="/gallery">
                      Browse Gallery
                    </a>
                  </p>
                </div>
              </div>
            </div>
            </div>
          

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
