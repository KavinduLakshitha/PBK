import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4g1uyvq",
        "template_zm0zq5r",
        form.current,
        "dtWO7qT6-FGwHzSNl"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
      <div className="d-flex justify-content-center">
        <form ref={form} onSubmit={sendEmail}>
          
          <div className="form-group">
            <label className="label" >Name</label>
            <input className="input" type="text" name="full_name" />
          </div>

          <div className="form-group">
            <label className="label">Email</label>
            <input className="input" type="email" name="email" />
          </div>         

          <div className="form-group">
            <label className="label">Phone Number</label>
            <input className="input" type="number" name="phone" />
          </div>
                    
          <div className="form-group">
            <label className="label">Message</label>
            <textarea className="textarea" name="message" />
          </div>
          
          <button type="submit" class="btn btn-secondary" value="Send">Submit</button>
          
        </form>
      </div>
    
  );
};

export default Contact;