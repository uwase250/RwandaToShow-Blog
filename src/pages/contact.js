import Footer from "../component/footer";
import Navbar from "../component/navbar";
import React from "react";

const Contact = () => {
  return (
    <div className="Contact-all">
      <Navbar />
      <div className="heroo">
        <h1>
          Contact<span> Us</span>
        </h1>
      </div>
      <br></br>
      <br></br>
      <div className="container-foo">
        <div className="form-contact">
          <h3>Get-In Touch</h3>

          <div className="inputController">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="inputController">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Your Email" />
          </div>
          <div className="inputController">
            <label htmlFor="">Message</label>

            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <input type="submit" value="Send Message" />
        </div>
      </div>

      <Footer className="footer-contact"></Footer>
    </div>
  );
};
export default Contact;
