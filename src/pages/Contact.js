import React, { Component } from 'react';
import './Contact.css';

function formSubmit(event) {
	//emailjs.send("gbwebsitenotif@gmail.com", "template_xBxlh1GP", {"reply_to":"sbgurneet@gmail.com","from_name":"Gurneet Bhatia","message_html":"hello this is a test message","from_email":"gurneetb0207@gmail.com"},  "user_6upZvLNmKuiCGSaXayqpK")
	event.preventDefault();
	/*const name = document.getElementById('contact-name').value;
	const email = document.getElementById('contact-email').value;
	const subject = document.getElementById('contact-Subject').value;
	var msg = document.getElementById('contact-message').value;
	msg = "Subject: " + subject + "\n " + "Message: " + msg;
	let templateVars = {
		"reply_to": "sbgurneet@gmail.com",
		"from_name": name,
		"message_html": msg,
		"from_email": email}
	emailjs.send("gbwebsitenotif@gmail.com", "template_xBxlh1GP", templateVars, "user_6upZvLNmKuiCGSaXayqpK");*/
}

class Contact extends Component {
  render() {
    return(
      <div className='container contact-container'>
				<section className="my-5 contact-section">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact Us</h2>
          <p className="text-center w-responsive mx-auto mb-5">If you have any questions about what we do, our events or sponsorship, please do get in touch!</p>
  				<div className="row">
    				<div className="col-md-9 mb-md-0 mb-5">
      					<form onSubmit={formSubmit}>
        					<div className="row">
          						<div className="col-md-6">
            						<div className="md-form mb-0">
              							<input type="text" id="contact-name" className="form-control" required/>
              							<label htmlFor="contact-name" className="">Your name</label>
            						</div>
          						</div>
          						<div className="col-md-6">
            						<div className="md-form mb-0">
              							<input type="email" id="contact-email" className="form-control" required/>
              							<label htmlFor="contact-email" className="">Your email</label>
            						</div>
          						</div>
        					</div>
        					<div className="row">
          						<div className="col-md-12">
            						<div className="md-form mb-0">
              							<input type="text" id="contact-Subject" className="form-control" required/>
              							<label htmlFor="contact-Subject" className="">Subject</label>
            						</div>
          						</div>
        					</div>
        					<div className="row">
          						<div className="col-md-12">
            						<div className="md-form">
              							<textarea id="contact-message" className="form-control md-textarea" rows="3" required></textarea>
              							<label htmlFor="contact-message">Your message</label>
            						</div>
          						</div>
        					</div>
        					<div className="text-center text-md-right">
        						<button type="submit" className="btn btn-primary btn-md">Send</button>
      						</div>
      					</form>
    				</div>
    				<div className="col-md-3 text-center">
      					<ul className="list-unstyled mb-0">
					        <li>
					        	<a href="mailto:gamedev@unicsmcr.com" style={{color: "#000"}}>
						        	<i className="fa fa-envelope fa-2x mt-4 blue-text"></i>
						        	<p className="mb-0">gamedev@unicsmcr.com</p>
        						</a>
        					</li>
                  <li>
					        	<a href="http://m.me/UniCsGameDev" style={{color: "#000"}}>
						        	<i class="fa fa-facebook-square fa-2x mt-4 blue-text"></i>
						        	<p className="mb-0">Chat with us on Facebook</p>
        						</a>
        					</li>
      					</ul>
    				</div>
  				</div>
			</section>
		</div>
    );
  }
}

export default Contact;
