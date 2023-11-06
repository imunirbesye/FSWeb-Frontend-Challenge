import React from "react";
import ProjectCard from "./ProjectCard";

import "./projects.css";

export default function Projects(props) {
  const { projects, titles } = props;

  return (
    <>
      <section className="projects dark:bg-slate-800 flex flex-col justify-center items-center">
        <span className="projects-title">{titles[3][0]}</span>
        {projects.map((p) => (
          <ProjectCard project={p} titles={titles[3]} />
        ))}
      </section>
    </>
  );
}
