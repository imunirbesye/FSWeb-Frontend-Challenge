import React from "react";
import styled from "styled-components";
/*
const StyledImageDiv = styled.div`
  background: url(${project.resim});
  background-size: cover;
  background-position: left top;
  background-repeat: no-repeat;
`;*/

export default function ProjectCard(props) {
  const { project, titles } = props;

  return (
    <div className="project-card dark:bg-slate-900">
      <div
        className="project-card-image"
        style={{
          backgroundImage: `url(${project.resim})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      />
      <div className="project-card-content">
        <span className="project-card-content-title dark:text-purple-600">
          {project.title}
        </span>
        <p className="project-card-content-description dark:text-white">
          {project.description}
        </p>
        <div className="project-card-content-techs mb-3">
          <ul className="flex flex-row gap-2">
            {project.techs.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="project-card-content-links gap-4 ">
          {project.links[1] ? (
            <a href={project.links[0]}>
              <span className="dark:text-neutral-300">{titles[1]}</span>
            </a>
          ) : null}

          <a href={project.links[project.links.length - 1]}>
            <span className="dark:text-neutral-300">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}
