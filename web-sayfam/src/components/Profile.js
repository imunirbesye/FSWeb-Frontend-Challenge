import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resim2 from "../Assets/image1.jpg";
import "./profile.css";

export default function Profile(props) {
  const { profile, titles } = props;

  return (
    <>
      <section className="profile dark:bg-indigo-950 flex flex-col justify-center items-center">
        <div className="profile-title">{titles[2][0]}</div>
        <div className="profile-content">
          <div className="basic-information">
            <span className="basic-information-title">{titles[2][1]}</span>
            <div className="basic-information-table">
              <span className="text-green">{titles[2][2]}</span>
              <span>{profile.birth}</span>
              <span className="text-green">{titles[2][3]}</span>
              <span>{profile.location}</span>
              <span className="text-green">{titles[2][4]}</span>
              <span>{profile.collage}</span>
              <span className="text-green">{titles[2][5]}</span>
              <span>{profile.prefer}</span>
            </div>
          </div>
          <div className="profile-image">
            <img src={resim2} alt="kendim" />
          </div>
          <div className="about-me flex flex-col">
            <span className="about-me-title">{titles[2][6]}</span>
            <p className="about-me-content">{profile.aboutMe}</p>
          </div>
        </div>
      </section>
    </>
  );
}
