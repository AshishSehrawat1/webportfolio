
import {BsLinkedin,BsGithub, BsFacebook} from 'react-icons/bs';
import './Contact.css'
//import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';
//mport { toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm('xbjnyglp');

  if (state.succeeded) {
    return <section class="login-main-wrapper">
    <div class="main-container">
        <div class="login-process">
            <div class="login-main-container">
                <div class="thankyou-wrapper">
                    <h1><img src="" alt="thanks" /></h1>
                      <p>for contacting us, we will get in touch with you soon... </p>
                      <a href="Home.js">Back to home</a>
                      <div class="clr"></div>
                  </div>
                  <div class="clr"></div>
              </div>
          </div>
          <div class="clr"></div>
      </div>
  </section>
    
  }
  
    

    
  return (
   <>
   <form method="POST" onSubmit={handleSubmit}>
   <div className=" contact">
    <div className="card card0 border-0">
        <div className="row" id="contact">
            <div className="col-md-6 col-lg-6 col-xl-6 col--sm-12">
                <div className="card1">
                    <div className="row border-line">
                        <LightSpeed>
                        <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg" alt="contact" className="image"/>
                        </LightSpeed>
                    </div>
                </div>

            </div>
            <div className="col-lg-6 col-md-6">
                
                <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                    <div className="row">
                    <h6>Contact with 
                        <BsLinkedin color='blue' size={30} className="ms-2"/>
                        <BsGithub color='black' size={30} className="ms-2"/>
                        <BsFacebook color='blue' size={30} className="ms-2"/>
                        </h6>
                    </div>

                    
                    <div className="row px-3 mb-4">
                        <div className="line"/>
                            <small className="or text-center">OR</small>
                            <div className="line"/>

                    </div>
                    
                    <div className="row px-3">
                    
                    <label htmlFor="name">Full Name</label>
      <input id="name" type="text" name="name" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

                    </div>
                    <div className="row px-3">
                    <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
                        

                    </div>
                    <div className="row px-3">
                    <label htmlFor="message">Message</label>
      <textarea id="message" name="message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

                        

                    </div>
                    <div className="row px-3">
                    <button className="button" type="submit" disabled={state.submitting}>
        Send Message
      </button>
      <ValidationError errors={state.errors} />
                        

                    </div>
                    
                </div>
                
            </div>
            
            </div>
        </div>
    </div>
   </div></form>
   </>
  )
}