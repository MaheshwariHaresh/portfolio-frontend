import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useTheme } from "../context/theme";

function ProjectDetails() {
  const { slug } = useParams();

  const { theme } = useTheme();
  const dark = theme === "dark";
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);

  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/projects/${slug}`,
        );
        setProject(data?.project);
        console.log(data?.project);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(
        docHeight > 0
          ? Math.min(100, Math.round((scrollY / docHeight) * 100))
          : 0,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" },
    );

    const revealElements = rootRef.current?.querySelectorAll(".reveal") ?? [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`scroll-smooth ${dark ? "dark" : ""} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-body antialiased`}
    >
      <style>{`*,*::before,*::after{box-sizing:border-box;}html{font-family:'DM Sans',sans-serif;}h1,h2,h3,h4,h5,h6{font-family:'PT Sans',sans-serif;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#FF6B2B;border-radius:99px;}body{transition:background-color .3s,color .3s;}body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;opacity:.4;}.nav-link{position:relative;}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:currentColor;transition:width .25s cubic-bezier(.4,0,.2,1);}.nav-link:hover::after{width:100%;}.btn-primary{position:relative;overflow:hidden;}.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:rgba(255,255,255,.18);transform:skewX(-20deg);transition:left .4s cubic-bezier(.4,0,.2,1);}.btn-primary:hover::after{left:160%;}[x-cloak]{display:none!important;}.photo-frame{position:relative;overflow:hidden;background:#e4e4e7;}.photo-frame img{width:100%;height:100%;object-fit:cover;display:block;}.progress-bar{position:fixed;top:0;left:0;height:3px;background:#FF6B2B;z-index:100;transition:width .1s linear;}.reveal{opacity:0;transform:translateY(22px);transition:opacity .55s cubic-bezier(.4,0,.2,1),transform .55s cubic-bezier(.4,0,.2,1);}.reveal.visible{opacity:1;transform:translateY(0);}.d1{transition-delay:.07s}.d2{transition-delay:.14s}.d3{transition-delay:.21s}.d4{transition-delay:.28s}.prose-cs h2{font-family:'PT Sans',sans-serif;font-size:1.55rem;font-weight:700;margin:2.75rem 0 1rem;line-height:1.25;}.prose-cs h3{font-family:'PT Sans',sans-serif;font-size:1.15rem;font-weight:700;margin:2rem 0 .6rem;line-height:1.3;color:#FF6B2B;}.prose-cs p{margin:0 0 1.4rem;line-height:1.82;color:#52525b;}.dark .prose-cs p{color:#a1a1aa;}.prose-cs ul{margin:0 0 1.4rem 1.5rem;list-style:disc;}.prose-cs li{margin-bottom:.45rem;line-height:1.7;color:#52525b;}.dark .prose-cs li{color:#a1a1aa;}.prose-cs blockquote{border-left:3px solid #FF6B2B;padding:.75rem 1.25rem;margin:0 0 1.8rem;background:#fff7f4;border-radius:0 8px 8px 0;}.dark .prose-cs blockquote{background:#27272a;}.prose-cs blockquote p{color:#52525b;font-style:italic;margin:0;}.dark .prose-cs blockquote p{color:#a1a1aa;}.prose-cs hr{border:none;border-top:1px solid #e4e4e7;margin:2.5rem 0;}.dark .prose-cs hr{border-top-color:#27272a;}.prose-cs a{color:#FF6B2B;text-decoration:underline;text-underline-offset:3px;}.stat-card{border-left:3px solid #FF6B2B;}.img-caption{font-size:.8rem;color:#a1a1aa;text-align:center;margin-top:.6rem;}.step-badge{width:2rem;height:2rem;min-width:2rem;border-radius:50%;background:#FF6B2B;color:#fff;font-family:'PT Sans',sans-serif;font-weight:700;font-size:.85rem;display:flex;align-items:center;justify-content:center;}.card-h{transition:transform .28s cubic-bezier(.4,0,.2,1),border-color .18s;}.card-h:hover{transform:translateY(-4px);}`}</style>

      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
        style={{ width: `${progress}%` }}
      />

      <main>
        <article>
          <header className="pt-32 pb-10 max-w-4xl mx-auto px-6">
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to projects
            </a>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                Completed
              </span>
              <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                Featured
              </span>
              <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                Full Stack Developer
              </span>
            </div>

            <h1 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">
              {project?.title}
            </h1>

            <p className="reveal d1 text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              {project?.shortDescription}
            </p>
            {/* 
            <div className="reveal d2 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Client
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Teck in Burn.
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Role
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Full Stack Developer
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Timeline
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Jan – Feb 2025
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Deliverables
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Figma, HTML/CSS
                </p>
              </div>
            </div> */}
          </header>

          {/* Cover image */}
          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="reveal photo-frame w-full h-72 md:h-[480px] rounded-3xl">
              <img
                src={project?.images[0]?.url}
                alt={project?.title}
                loading="eager"
              />
            </div>
          </div>

          {/* Project Overview */}
          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>Project Overview</h2>
            <p>{project?.longDescription}</p>
            {/* Tech Stack */}
            <p className="text-zinc-500 dark:text-zinc-400 mb-10">
              Technologies used to build this project.
            </p>
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

            {/* Project Links */}
            <div className="flex flex-wrap gap-4 mt-8">
              {project?.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-600 text-zinc-300 font-medium hover:border-[#FF6B2B] hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/5 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.95c.58.1.79-.25.79-.56v-2.2c-3.26.7-3.95-1.39-3.95-1.39-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.18.08 1.8 1.2 1.8 1.2 1.04 1.8 2.74 1.28 3.4.98.1-.76.41-1.28.74-1.57-2.6-.3-5.34-1.3-5.34-5.77 0-1.27.46-2.31 1.2-3.13-.12-.3-.52-1.52.11-3.16 0 0 .98-.31 3.2 1.2a11.2 11.2 0 015.82 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.64.23 2.86.11 3.16.75.82 1.2 1.86 1.2 3.13 0 4.48-2.74 5.46-5.35 5.76.42.36.8 1.08.8 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
              )}

              {project?.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-600 text-zinc-300 font-medium hover:border-[#FF6B2B] hover:text-[#FF6B2B] hover:bg-[#FF6B2B]/5 transition-all duration-300 hover:scale-105"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 3h7v7m0-7L10 14m-4 0H3v7h7"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>
          {/* Banner */}
          {/* <div className="max-w-5xl mx-auto px-6 mb-4">
            <div className="reveal photo-frame w-full h-56 md:h-80 rounded-2xl">
              <img
                src={project?.coverImage}
                alt={project?.title}
                loading="lazy"
              />
            </div>
            <p className="img-caption">
              Existing dashboard with heuristic violations annotated during the
              audit phase.
            </p>
          </div> */}
          {/* Development Highlights */}
          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>Development Highlights</h2>
            <p>
              Based on the research, I built the redesign around three
              principles:
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 mb-12">
            <div className="reveal grid md:grid-cols-3 gap-5">
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 bg-orange-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                  style={{
                    fontSize: "1rem",
                    margin: "0 0 .5rem",
                    color: "inherit",
                  }}
                >
                  REST API Architecture
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Created scalable REST endpoints using Express.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 bg-orange-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </div>
                <h3
                  className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                  style={{
                    fontSize: "1rem",
                    margin: "0 0 .5rem",
                    color: "inherit",
                  }}
                >
                  JWT Authentication
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Created scalable REST endpoints using Express.
                </p>
              </div>
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-7 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 bg-orange-50 dark:bg-zinc-800 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3
                  className="font-display font-bold text-zinc-900 dark:text-white mb-2"
                  style={{
                    fontSize: "1rem",
                    margin: "0 0 .5rem",
                    color: "inherit",
                  }}
                >
                  Role Based Authorization
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Created scalable REST endpoints using Express.
                </p>
              </div>
            </div>
          </div>
          <ProjectGallery images={project?.images.slice(1)} />

          {/* Reflection */}
          {project?.reflection && (
            <div className="max-w-3xl mx-auto px-6 pb-16 prose-cs">
              <h2>{project.reflection.heading}</h2>

              {project.reflection.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <hr />

              <p>
                <em>
                  Interested in a similar project?{" "}
                  <a href="/#contact">Let's work together</a> — I'm always
                  excited to build modern, scalable web applications.
                </em>
              </p>
            </div>
          )}
        </article>

        {/* <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display font-bold text-2xl text-zinc-900 dark:text-white">
                More projects
              </h2>
              <a
                href="projects.html"
                className="text-sm font-medium text-accent nav-link hidden md:block"
              >
                View all →
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="reveal card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80"
                    alt="Finlo — Fintech App"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Landing page
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Finlo — Fintech App
                    </h3>
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-accent nav-link"
                  >
                    View project →
                  </a>
                </div>
              </article>
              <article className="reveal card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=700&q=80"
                    alt="Orea — Creative Agency"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                      Agency
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Orea — Creative Agency
                    </h3>
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-accent nav-link"
                  >
                    View project →
                  </a>
                </div>
              </article>
              <article className="reveal card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=700&q=80"
                    alt="Bloom — E-commerce"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                      E-commerce
                    </span>
                  </div>
                  <a href="#">
                    <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Bloom — E-commerce
                    </h3>
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-accent nav-link"
                  >
                    View project →
                  </a>
                </div>
              </article>
            </div>
            <div className="text-center mt-8 md:hidden">
              <a
                href="projects.html"
                className="text-sm font-medium text-accent"
              >
                View all projects →
              </a>
            </div>
          </div>
        </section> */}

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <p className="text-xs font-medium text-accent tracking-widest uppercase mb-4">
                  Ready to start?
                </p>
                <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
                  Got a similar project?
                </h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">
                  I'm available for new projects. Tell me about what you're
                  building and let's see if we're a good fit.
                </p>
                <HashLink
                  smooth
                  to="/#contact"
                  className="inline-flex items-center gap-2 btn-primary bg-accent text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
                >
                  Start a Project →
                </HashLink>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectDetails;
