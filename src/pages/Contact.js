import { Facebook, Instagram, Message, WhatsApp } from "@mui/icons-material";
import "../styles/Contact.css";

const Contact = () => {
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

          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
