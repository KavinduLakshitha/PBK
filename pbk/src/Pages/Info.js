import React from "react";
import "../styles/about.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

export default function Info() {
  return (
    <div className="container">
      <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="row">
          <div className="col-lg-4">
            <img src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1658141370/Portraits%20By%20Kavindu/circle_dp_oplypd.png"  className="img" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3 className="about-title">About Me</h3>
            <p>
              "Hi, I am Kavindu. I am 24 years of age, and I study at the Sri Lanka Institute of Information and Technology. 
              I am a traditional portrait artist devoted to developing my art style. I loved drawing as a kid & I will love it when I am 500 years old. 
              I have spent hundreds of thousands of hours attempting new things, picking up new talents, and refining the ones I already have. 
              I am grateful to my parents and art teachers for supporting me along the way."
              <br/>
              <br/>
                So I have been doing commission works for almost four years now.
                To get a lovely drawing of a loved one, your family, or even your pet, give me a ring or leave a message.
                I should let you know about a few things first, though.
              </p>
              
          </div>
          <div className="container-xxl" style={{paddingTop:"30px"}}>
                <h3 className="about-order">Before placing an order...</h3>
                <ul className="list-group" style={{paddingTop:"10px", paddingBottom: "15%", textAlign:"left" }}>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;Check the pricing and details to ensure what your options are.</li>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;I need a good-quality picture (not blurred, no fancy filters). The better the image quality, the better the drawing will be.</li>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;If you want a picture of a pet, the price counts as one person.</li>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;If possible, please send me a few photos of the reference person so that I can select the best of them possible, considering the lighting and the angles of the picture.</li>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;You must deposit an advance payment (half of the total amount) to place an order. You can deposit the other half when I have finished the drawing.</li>
                  <li class="list-group-item"><i class="bi bi-check-circle-fill"></i>&nbsp;&nbsp;&nbsp;Contact me at least two weeks before the date you want the drawing.</li>
                </ul>
              </div>
        </div>

      </div>
    </section>
    </div>
  );
}
