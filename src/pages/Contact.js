import axios from "axios";
import { Facebook, Instagram, Message, WhatsApp } from "@mui/icons-material";
import "../styles/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {
      return alert("Name Is Required");
    }
    if (!form.email) {
      return alert("Email Is Required");
    }
    if (!form.message) {
      return alert("Message Is Required");
    }

    try {
      setLoading(true);
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/message/send`,
        form
      );
      if (data?.success) {
        setTimeout(() => {
          setForm({ name: "", email: "", message: "" });
          setLoading(false);
          alert("message sent");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contact-container">
      <div className="contact-row">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <p className="contact-title h2">
            <span>DO YOU HAVE A PROJECT TO DISCUSS?</span>
          </p>

          <div className="contact-get-touch">
            <p className="h4">GET IN TOUCH</p>
            <span className="icon-center">
              <Message />
            </span>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-box">
              <p className="h5">CONTACT</p>
              <p>
                <a href="mailto:maheshwariharesh060@gmail.com">
                  maheshwariharesh060@gmail.com
                </a>
              </p>
            </div>

            <div className="contact-info-box">
              <p className="h5">SOCIAL MEDIA</p>
              <span>
                <Facebook color="primary" />
              </span>
              <span>
                <WhatsApp color="success" />
              </span>
              <span>
                <Instagram color="error" />
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <p className="h5 contact-form-title">Contact Form</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control "
                id="message"
                rows="3"
                name="message"
                value={form.message}
                onChange={handleChange}
                maxLength={1000}
              ></textarea>
              {/* Character Counter */}
              <div className="text-end text-muted" style={{ fontSize: "14px" }}>
                {form.message.length} / 1000
              </div>
            </div>

            <button type="submit" className="btn">
              {loading ? "SENDING..." : "SEND"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
