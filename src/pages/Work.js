import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const Work = () => {
  const [projects, setProjects] = useState([]);
  const workRef = useRef(null);

  useRevealOnScroll(workRef);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/projects`,
      );

      if (data?.success) {
        setProjects(data?.projects || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div ref={workRef} className="max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Portfolio
          </p>

          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Featured Projects
          </h2>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {Array.from({ length: Math.ceil(projects.length / 4) }).map(
          (_, blockIndex) => {
            const block = projects.slice(blockIndex * 4, blockIndex * 4 + 4);

            return (
              <div key={blockIndex} className="grid md:grid-cols-2 gap-6">
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-6">
                  {/* Project 1 - LARGE */}
                  {block[0] && (
                    <ProjectCard project={block[0]} large delay="d1" />
                  )}

                  {/* Project 3 - SMALL */}
                  {block[2] && <ProjectCard project={block[2]} delay="d3" />}
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-6">
                  {/* Project 2 - SMALL */}
                  {block[1] && <ProjectCard project={block[1]} delay="d2" />}

                  {/* Project 4 - LARGE */}
                  {block[3] && (
                    <ProjectCard project={block[3]} large delay="d4" />
                  )}
                </div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

/* ---------------------------------
   Project Card
---------------------------------- */

const ProjectCard = ({
  project,
  large = false,
  delay = "",
  className = "",
}) => {
  return (
    <article
      className={`card-h reveal ${delay} group rounded-2xl overflow-hidden
        bg-zinc-100 dark:bg-zinc-900
        border border-zinc-100 dark:border-zinc-800
        hover:border-accent
        transition-all duration-300
        ${className}`}
    >
      {/* Image */}
      {/* <div className={`pf w-full ${large ? "h-64 md:h-80" : "h-48"}`}>
        <img
          src={project?.thumbnailImage}
          alt={project?.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div> */}
      {/* Image */}
      <div
        className={`pf w-full ${
          large ? "h-64 md:h-80" : "h-48"
        } overflow-hidden bg-zinc-200 dark:bg-zinc-800`}
      >
        <img
          src={project?.thumbnailImage}
          alt={project?.title}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className={large ? "p-7" : "p-6"}>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.techStack?.map((tag, index) => (
            <span
              key={index}
              className="text-xs
                bg-orange-50 dark:bg-zinc-800
                text-accent
                border border-orange-200 dark:border-zinc-700
                px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <a href={`/project/${project?.slug}`}>
          <h3
            className={`font-display font-bold
              text-zinc-900 dark:text-white
              hover:text-accent transition-colors
              ${large ? "text-2xl mb-2" : "text-xl mb-1.5"}`}
          >
            {project?.title}
          </h3>
        </a>

        {/* Description */}
        <p
          className={`text-sm text-zinc-500 dark:text-zinc-400
            leading-relaxed
            ${large ? "mb-5" : "mb-4"}`}
        >
          {project?.shortDescription}
        </p>

        {/* Explore */}
        <a
          href={`/project/${project?.slug}`}
          className="inline-flex items-center gap-1.5
            text-sm font-medium
            text-zinc-900 dark:text-white
            hover:text-accent
            transition-colors"
        >
          Explore Project
          <svg
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};

export default Work;
