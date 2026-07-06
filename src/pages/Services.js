function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="mb-14">
        <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
          What I do
        </p>
        <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
          Services
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <article className="reveal d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
            Full Stack Web Development
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Build fast, scalable web applications using the MERN stack with
            clean code, responsive design, and seamless user experiences.
          </p>
        </article>

        <article className="reveal d2 card-h group bg-zinc-900 dark:bg-zinc-800 rounded-2xl p-8 border border-zinc-800 hover:border-accent">
          <div className="w-12 h-12 flex items-center justify-center bg-zinc-800 dark:bg-zinc-700 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16M6 6v12M18 6v12"
              />
            </svg>
          </div>
          <h3 className="font-display font-bold text-xl text-white mb-3">
            Backend API Development
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            Develop secure, high-performance REST APIs with Node.js and
            Express.js, ensuring reliable data flow and seamless frontend
            integration..
          </p>
        </article>

        <article className="reveal d3 card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">
          <div className="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 group-hover:bg-accent/10 transition-colors">
            <svg
              className="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4zm0 7a2 2 0 100 4 2 2 0 000-4z"
              />
            </svg>
          </div>
          <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">
            Authentication & Database Integration
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
            Implement secure authentication and efficient MongoDB integration to
            deliver reliable, scalable, and production-ready backend solutions.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Services;
