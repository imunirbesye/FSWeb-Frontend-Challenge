import React from "react";
import "./skills.css";

import jsResim from "../Assets/js.jpg";
import reactResim from "../Assets/react.jpg";
import reduxResim from "../Assets/redux.jpg";
import nodeResim from "../Assets/node.jpg";
import figmaResim from "../Assets/figma.jpg";
import vsResim from "../Assets/vs.jpg";

export default function Skills(props) {
  const { titles } = props;

  return (
    <>
      <section className="section2 dark:bg-slate-800 flex justify-center items-center">
        <div className="skills-title dark:text-green font-bold self-start">
          {titles[1]}
        </div>
        <div className="skills-icons dark:text-slate-200">
          <div className="skills-js flex items-center">
            <img src={jsResim} className="h-full rounded-lg mr-5" />
            <span>JAVASCRIPT</span>
          </div>
          <div className="skills-node  flex items-center">
            <img src={nodeResim} className="h-full rounded-lg mr-5" />
            <span>NODE</span>
          </div>
          <div className="skills-react flex items-center">
            <img src={reactResim} className="h-full rounded-lg mr-5" />
            <span>REACT</span>
          </div>

          <div className="skills-vs flex items-center">
            <img src={vsResim} className="h-full rounded-lg mr-5" />
            <span>VS CODE</span>
          </div>
          <div className="skills-redux flex items-center">
            <img src={reduxResim} className="h-full rounded-lg mr-5" />
            <span>REDUX</span>
          </div>
          <div className="skills-figma flex items-center">
            <img src={figmaResim} className="h-full rounded-lg mr-5" />
            <span>FIGMA</span>
          </div>
        </div>
      </section>
    </>
  );
}
