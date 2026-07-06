import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Work = () => {
  const [projects, setProjects] = useState([]);

  // Intersection Observer for reveal animations
  const workRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = workRef.current.querySelectorAll(".reveal");

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [projects]);

  const fetchProjects = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/projects");
      if (data?.success) {
        setProjects(data?.projects);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);
  return (
    <div ref={workRef} className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
        <div>
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
            Featured Projects
          </h2>
        </div>
        <a
          href="projects.html"
          className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
        >
          All projects →
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredProject && (
          <article className="card-h reveal d1 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent md:row-span-2">
            <div className="pf w-full h-64 md:h-80">
              <img
                src={featuredProject?.coverImage}
                alt={featuredProject?.title}
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredProject?.techStack?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="/project-details">
                <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-2">
                  {featuredProject?.title}
                </h3>
              </a>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
                {featuredProject?.shortDescription}
                <br />
                <br />
                {featuredProject?.shortDescription}
                <br />
                <br />
                {featuredProject?.shortDescription}
              </p>
              <a
                href="/project-details"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
              >
                Explore Project{" "}
                <svg
                  className="w-3.5 h-3.5"
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
        )}

        {otherProjects.map((project) => (
          <article className="card-h reveal d2 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
            <div className="pf w-full h-48">
              <img
                src={project.coverImage}
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {project?.techStack?.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="/project-details">
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-1.5">
                  {project.title}
                </h3>
              </a>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {project.shortDescription}
              </p>
              <a
                href="/project-details"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
              >
                Explore Project →
              </a>
            </div>
          </article>
        ))}
        {/* <article className="card-h reveal d3 group rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
          <div className="pf w-full h-48">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80"
              alt="Orea Creative Agency"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full">
                Agency
              </span>
              <span className="text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-3 py-1 rounded-full">
                Animation
              </span>
            </div>
            <a href="/case-study">
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-1.5">
                Blood Bank Management System (BBMS)
              </h3>
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
              Bold editorial site for a Paris-based branding studio.
              Scroll-driven animations and custom cursor to match their premium
              positioning.
            </p>
            <a
              href="/project-details"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
            >
              Explore Project →
            </a>
          </div>
        </article> */}
      </div>
    </div>
  );
};

export default Work;
