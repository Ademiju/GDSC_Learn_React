import { useState, React } from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import "./contactpage.css";

function ContactPage() {
  const [formStatus, setFormStatus] = useState("Send");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
    setFormStatus("Submitting...");
    setTimeout(() => {
      setFormStatus("Send");
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
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
            <input
              className="form-control"
              type="text"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="email">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
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
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <button className="button" type="submit">
            {formStatus}
          </button>
        </form>

        <p>
          <a
            href="https://ademiju-taiwo.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
          >
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
