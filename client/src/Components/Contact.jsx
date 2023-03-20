import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';

const Contact = () =>{
   
    return(
        <section>

        <div class="listing-hero">
          <div class="hero-heading">
              <div class="hero-large">Contact Us.</div>
              <div class="hero-text"> <i>Got any Questions? Feel free to ask</i> </div>       
            </div>
        </div>
      
      <div class="container-contact">
          <div class="wrap-contact">
      
            <form name="contact" class="contact-form validate-form" >
      
              <div class="wrap-input validate-input" data-validate="Please enter your name">
                <input class="input" type="text" name="name" placeholder="Full Name" required/>
              </div>
      
              <div class="wrap-input validate-input" data-validate = "Please enter your email">
                <input class="input" type="text" name="email" placeholder="E-mail" required/>
              </div>
      
              <div class="wrap-input validate-input" data-validate = "Please enter your message">
                <textarea class="input" type="text" name="message" placeholder="Your Message" required></textarea>
              </div>
      
              <div class="container-contact-form-btn">
              {/* <Mailto email="tapadialeena@gmail.com" obfuscate={true}>
              Mail me
      </Mailto> */}
<Link to='#' onClick={() => window.location = 'mailto:tapadialeena@gmail.com'}><button type="submit" class="contact-form-btn" >
                  <span>Send</span>
                </button></Link>
      
              </div>
      
              <div class="grid-container">
                <div class="item1 left-align"><i className="fa fa-map-marker"></i> Institute of engineering and technology,Indore</div>  
                <div class="item4 right-align"><i className="fa fa-lg fa-phone"></i>9669000098</div>
      
            </div>
      
            </form>
      
          </div>
        </div>
      
      
      </section>
      
    )
}


export default Contact