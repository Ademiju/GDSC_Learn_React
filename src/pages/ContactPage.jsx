import { useState, React } from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import "./contactpage.css";

function ContactPage() {
  const [formStatus, setFormStatus] = useState("Send");
  const onSubmit = (e) => {
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
    setTimeout(onSubmit, 5000);
    alert("Message Successfully Sent");
    setFormStatus("Send");
  };
  return (
    <Card>
      <div className="contact-me">
        <h1>Contact Me</h1>

        <form onSubmit={onSubmit}>
          <div className="name">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="email">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="text-area">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              required
              minLength={10}
              maxLength={150}
            />
          </div>
          <button className="btn" type="submit">
            {formStatus}
          </button>
        </form>

        <p>
          <a href="https://ademiju-taiwo.netlify.app/" target={"_blank"}>
            My Portfolio
          </a>
        </p>
        <p>
          <Link to="/about">About Me</Link>
        </p>
        <p>
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default ContactPage;
