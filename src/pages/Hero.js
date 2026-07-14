import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">
              Available for work
            </p>
            <h1 className="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">
              Hi, I'm <span className="text-accent">Haresh Kumar</span>
            </h1>
            <p className="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">
              <strong className="font-medium text-zinc-700 dark:text-zinc-300">
                MERN Stack Developer
              </strong>{" "}
              . passionate about building scalable, high-performance web
              applications with clean code, intuitive user experiences, and
              modern technologies.
            </p>
            <div className="reveal d3 flex flex-wrap gap-4">
              <a
                href="#work"
                className="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm"
              >
                View my work
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
              <a
                href="/HARESH_KUMAR_RESUME.pdf"
                download
                className="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16V4m0 12l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
                Download Resume
              </a>
            </div>
            <div className="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  5+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Full Stack Projects
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  2+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Years of Learning
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  15+
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  Technologies & Tools
                </p>
              </div>
            </div>
          </div>

          <div className="reveal d2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="pf w-full h-full rounded-3xl">
                <img
                  src="/images/haresh-profile.jpg"
                  alt="Haresh Kumar — Mern Stack Developer"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">
                Open to projects
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
