import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import emailjs from "emailjs-com";
import "./contact.css";

const initialTR = {
  name: "Adı Soyadı",
  number: "0 (5--) --- -- --",
  email: "E-Mail Adresi",
  message: "Mesajınız...",
};

const initialEN = {
  name: "Name Surname",
  number: "0 (5--) --- -- --",
  email: "E-Mail Address",
  message: "Message...",
};

export default function Contact(props) {
  const { titles, lang } = props;
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState(initialTR);

  useEffect(() => {
    console.log(lang);
    lang === "TR" ? setForm(initialTR) : setForm(initialEN);
  }, [lang]);

  const SERVICE_ID = "service_k4z7po6";
  const TEMPLATE_ID = "template_k5rbtyw";
  const USER_ID = "EiRagc-0Ypsb3qoEp";

  const toggleSendEmail = (toggle) => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  const handleChange = (event) => {
    let { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID).then(
      (result) => {
        if (lang === "TR") setForm(initialTR);
        else setForm(initialEN);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <section className="contact dark:bg-indigo-950 flex flex-col justify-center items-center">
        <span className="contact-title dark:text-green">{titles[4][0]}</span>
        <p className="contact-text dark:text-white">{titles[4][1]}</p>
        <span
          className="contact-mail dark:text-green"
          onClick={() => toggleSendEmail(toggle)}
        >
          imunirbesye@gmail.com
        </span>
        <ul className="contact-social-media flex flex-row gap-3 mb-5 ">
          <a href="https://twitter.com">
            <li>
              <FontAwesomeIcon
                icon={faTwitter}
                className="contact-social-media-list-item dark:text-green"
              />
            </li>
          </a>
          <a href="https://codepen.io/M-nir-BESYE">
            <li>
              <FontAwesomeIcon
                icon={faCodepen}
                className="contact-social-media-list-item dark:text-green"
              />
            </li>
          </a>
          <a href="https://www.instagram.com/imunirbesye/">
            <li>
              <FontAwesomeIcon
                icon={faInstagram}
                className="contact-social-media-list-item dark:text-green"
              />
            </li>
          </a>
        </ul>
      </section>
      {toggle ? (
        <section className="sendEmail">
          <div className="sendEmail-box">
            <div
              className="close-sendEmail"
              onClick={() => toggleSendEmail(toggle)}
            >
              x
            </div>
            {lang === "TR" ? (
              <span>Mesaj Gönder</span>
            ) : (
              <span>Send Message</span>
            )}
            <form
              className="sendEmail-form"
              onSubmit={(event) => handleSubmit(event)}
            >
              <input
                type="text"
                name="from_name"
                placeholder={form.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="from_number"
                placeholder={form.number}
                onChange={handleChange}
              />
              <input
                type="mail"
                name="from_email"
                placeholder={form.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder={form.message}
                onChange={handleChange}
              />
              <button>GÖNDER!</button>
            </form>
          </div>
        </section>
      ) : null}
    </>
  );
}
