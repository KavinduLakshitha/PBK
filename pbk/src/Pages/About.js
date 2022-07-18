import React from "react";
import "../styles/about.css"

export default function About() {
  return (
    <div className="container">
      <section id="about" class="about">
      <div class="container aos-init aos-animate" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-4">
            <img src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1658141370/Portraits%20By%20Kavindu/circle_dp_oplypd.png"  class="img" alt=""/>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3 className="title">About Me</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p className="para">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
  );
}
