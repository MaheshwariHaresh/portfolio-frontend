import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectGallery from "../components/ProjectGallery";
import { HashLink } from "react-router-hash-link";
import axios from "axios";
import { useTheme } from "../context/theme";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

function ProjectDetails() {
  const { slug } = useParams();

  const { theme } = useTheme();
  const dark = theme === "dark";
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);

  const [project, setProject] = useState(null);

  useRevealOnScroll(rootRef);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`scroll-smooth ${dark ? "dark" : ""} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-body antialiased`}
    >
      <style>{`*,*::before,*::after{box-sizing:border-box;}html{font-family:'DM Sans',sans-serif;}h1,h2,h3,h4,h5,h6{font-family:'PT Sans',sans-serif;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#FF6B2B;border-radius:99px;}body{transition:background-color .3s,color .3s;}body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;opacity:.4;}.nav-link{position:relative;}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:currentColor;transition:width .25s cubic-bezier(.4,0,.2,1);}.nav-link:hover::after{width:100%;}.btn-primary{position:relative;overflow:hidden;}.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:rgba(255,255,255,.18);transform:skewX(-20deg);transition:left .4s cubic-bezier(.4,0,.2,1);}.btn-primary:hover::after{left:160%;}[x-cloak]{display:none!important;}.photo-frame{position:relative;overflow:hidden;background:#e4e4e7;}.photo-frame img{width:100%;height:100%;object-fit:cover;display:block;}.progress-bar{position:fixed;top:0;left:0;height:3px;background:#FF6B2B;z-index:100;transition:width .1s linear;}.reveal{opacity:0;transform:translateY(22px);transition:opacity .55s cubic-bezier(.4,0,.2,1),transform .55s cubic-bezier(.4,0,.2,1);}.reveal.in{opacity:1;transform:translateY(0);}.d1{transition-delay:.07s}.d2{transition-delay:.14s}.d3{transition-delay:.21s}.d4{transition-delay:.28s}.prose-cs h2{font-family:'PT Sans',sans-serif;font-size:1.55rem;font-weight:700;margin:2.75rem 0 1rem;line-height:1.25;}.prose-cs h3{font-family:'PT Sans',sans-serif;font-size:1.15rem;font-weight:700;margin:2rem 0 .6rem;line-height:1.3;color:#FF6B2B;}.prose-cs p{margin:0 0 1.4rem;line-height:1.82;color:#52525b;}.dark .prose-cs p{color:#a1a1aa;}.prose-cs ul{margin:0 0 1.4rem 1.5rem;list-style:disc;}.prose-cs li{margin-bottom:.45rem;line-height:1.7;color:#52525b;}.dark .prose-cs li{color:#a1a1aa;}.prose-cs blockquote{border-left:3px solid #FF6B2B;padding:.75rem 1.25rem;margin:0 0 1.8rem;background:#fff7f4;border-radius:0 8px 8px 0;}.dark .prose-cs blockquote{background:#27272a;}.prose-cs blockquote p{color:#52525b;font-style:italic;margin:0;}.dark .prose-cs blockquote p{color:#a1a1aa;}.prose-cs hr{border:none;border-top:1px solid #e4e4e7;margin:2.5rem 0;}.dark .prose-cs hr{border-top-color:#27272a;}.prose-cs a{color:#FF6B2B;text-decoration:underline;text-underline-offset:3px;}.stat-card{border-left:3px solid #FF6B2B;}.img-caption{font-size:.8rem;color:#a1a1aa;text-align:center;margin-top:.6rem;}.step-badge{width:2rem;height:2rem;min-width:2rem;border-radius:50%;background:#FF6B2B;color:#fff;font-family:'PT Sans',sans-serif;font-weight:700;font-size:.85rem;display:flex;align-items:center;justify-content:center;}.card-h{transition:transform .28s cubic-bezier(.4,0,.2,1),border-color .18s;}.card-h:hover{transform:translateY(-4px);}`}</style>

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
          <header className="pt-20 pb-10 max-w-4xl mx-auto px-6">
            <a
              href="/#work"
              className="inline-flex items-center hover:!text-accent gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8"
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
          {/* project overview */}

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2 className="reveal">Project Overview</h2>

            <p className="reveal d1">{project?.longDescription}</p>

            <p className="reveal d2 text-zinc-500 dark:text-zinc-400 mb-10">
              Technologies used to build this project.
            </p>

            <div className="reveal d3 flex flex-wrap gap-2 mb-3">
              {project?.techStack?.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/*actions buttons  */}
            <div className="reveal d4 flex flex-wrap gap-4 mt-8">
              {project?.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-8 py-3.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  {/* GitHub SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-1.024-.014-1.856-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.466-1.11-1.466-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.087.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.6 9.6 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.412-.012 2.74 0 .267.18.579.688.481A10.001 10.001 0 0 0 22 12C22 6.477 17.523 2 12 2Z" />
                  </svg>
                  GitHub
                </a>
              )}

              {project?.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary bg-accent !text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
                >
                  {/* Live Demo SVG */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 13a5 5 0 007.07 0l1.42-1.42a5 5 0 000-7.07 5 5 0 00-7.07 0L10 6"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 11a5 5 0 00-7.07 0l-1.42-1.42a5 5 0 000 7.07 5 5 0 007.07 0L14 18"
                    />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

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
              <h2 className="reveal">{project.reflection.heading}</h2>

              {project.reflection.paragraphs?.map((paragraph, index) => (
                <p key={index} className={`reveal d${index + 1}`}>
                  {paragraph}
                </p>
              ))}

              <hr className="reveal d3" />

              <p className="reveal d4">
                <em>
                  Interested in a similar project?{" "}
                  <a href="/#contact">Let's work together</a> — I'm always
                  excited to build modern, scalable web applications.
                </em>
              </p>
            </div>
          )}
        </article>

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
