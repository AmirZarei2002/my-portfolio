import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    e.target.reset();

    emailjs
      .sendForm(
        "service_e9us9je",
        "template_vsguvi8",
        form.current,
        "xeVZPCpIzO7pfi53x"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>Email</h4>
            <h5>amir.zarei1381913@gmail.com</h5>
            <a href="mailto:amir.zarei1381913@gmail.com">Send an Email</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin />
            <h4>Linkedin</h4>
            <h5>Amirhossein Zarei</h5>
            <a href="https://www.linkedin.com/in/amirhossein-zarei-509b01220/">
              Connect me at linkedin
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp />
            <h4>WhatsApp</h4>
            <h5>09120175399</h5>
            <a href="https://api.whatsapp.com/send?phone=+980175399">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
