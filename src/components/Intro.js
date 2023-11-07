import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Navigate } from "react-router-dom";
import "./intro.css";
import resim1 from "../Assets/image1.jpg";
import DarkMode from "./DarkMode";

export default function Intro(props) {
  const { changeLang, curLang, intro } = props;

  const [navVar, setNavVar] = useState(false);

  const navChange = () => {
    setNavVar(!navVar);
  };

  return (
    <>
      <section className="intro dark:bg-none dark:bg-indigo-950">
        <div className="degisiklikler w-full h-1/12 flex justify-end flex-row font-bold">
          <span
            className="degisiklikler-dil w-3/4 flex pr-4 text-green"
            onClick={() => changeLang()}
          >
            {curLang === "tr" ? "ENGLISH" : "TÜRKÇE"}
            <font className="text-grayOz">
              {curLang === "tr" ? "" : "'YE GEÇ"}
            </font>
          </span>
          <div className="degisiklikler-mode w-1/4 dark-mode pl-4">
            <DarkMode />
          </div>
        </div>
        <div className="intro-title h-1/12 logo m-auto text-green font-bold text-5xl">
          münir
        </div>
        <div className="intro-content">
          <div className="intro-sol">
            <span className="intro-sol-greentext">{intro[0]}</span>
            <br />
            <span className="intro-sol-whitetext text-white">{intro[1]}</span>
            <ul className="intro-links flex flex-row">
              <a href="https://github.com/imunirbesye">
                <li className="bg-white">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="contact-social-media-list-item mr-1"
                  />
                  Github
                </li>
              </a>
              <a href="https://www.linkedin.com/in/m%C3%BCnir-besye-0399051b5/">
                <li className="bg-white">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="contact-social-media-list-item mr-1"
                  />
                  LinkedIn
                </li>
              </a>
            </ul>
          </div>
          <div className="intro-sag flex">
            <img src={resim1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
