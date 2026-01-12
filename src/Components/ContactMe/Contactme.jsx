import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactme.css";

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_w687v1d";
    const templateID = "template_oot96xg";
    const publicKey = "HmekBuC2zXJ5o3put";``````````````````````
    emailjs.send(serviceID, templateID, formData, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccessMsg("Message Sent Successfully!");
        setErrorMsg(""); 
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSuccessMsg(""), 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setErrorMsg("Failed to send message. Please try again.");
        setTimeout(() => setErrorMsg(""), 3000);
      });
  };

  return (
    <section id="contactMe" className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-subtitle">
          Feel free to reach out to me through any of the platforms below:
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <MdEmail size={26} className="contact-icon" />
            <a href="mailto:jainadi027@gmail.com">jainadi027@gmail.com</a>
          </div>

          <div className="contact-item">
            <FaLinkedin size={26} className="contact-icon" />
            <a
              href="www.linkedin.com/in/adityajain027"
              target="_blank"
            >
             linkedin.com/in/adityajain027
            </a>
          </div>

          <div className="contact-item">
            <FaGithub size={26} className="contact-icon" />
            <a href="https://github.com/purvibatra06" target="_blank">
              github.com/purvibatra
            </a>
          </div>

          <div className="contact-item">
            <FaPhone size={26} className="contact-icon" />
            <a href="tel:+919758835072">+91 9758835072</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="contact-btn">Send Message</button>

          {successMsg && <p className="success-message">{successMsg}</p>}
          {errorMsg && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    </section>
  );
}
