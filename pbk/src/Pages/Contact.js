import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/navbar.css";

const Result = () => {
  return(
    <p className="result">Your message has been submitted successfully!</p>
  )
}

const Contact = () => {
  
  const form = useRef();

  const [result, showResult] = useState(false);

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
      e.target.reset();
      showResult(true);
    };

  // hide result

  setTimeout(() => {
    showResult(false)  
  }, 5000)

  return ( 
        <div className="form-container">          

          <form ref={form} onSubmit={sendEmail}>
          <h3 className="contact-title">Leave a Message</h3>
            <div class="form-group">
            <label for="full_name" class="form-label">Name</label>
            <input type="text" class="form-control" id="full_name" name="full_name" required/>
            </div>
            
            <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" name="email" required/>
            </div>

            <div class="form-group">
            <label for="phone" class="form-label">Phone</label>
            <input type="number" class="form-control" id="phone" name="phone" required/>
            </div>            
            
            <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" name="message" required/>
            </div>
                  
            <div class="form-group">
            <button class="btn btn-secondary" id="btn" type="submit" value="Send">Submit</button>

            <div className="row">{
              result ? <Result/> : null
            }
            
            </div>           

            </div>
          </form>
        </div>
  );
};

export default Contact;