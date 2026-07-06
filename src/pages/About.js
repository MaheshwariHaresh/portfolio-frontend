import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="reveal order-2 md:order-1">
          <div className="pf w-full aspect-square max-w-sm mx-auto rounded-3xl">
            <img
              src="/images/haresh-profile.jpg"
              alt="Haresh Kumar"
              loading="lazy"
            />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
            About me
          </p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-6">
            A bit about
            <br />
            who I am
          </h2>
          <p className="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
            I'm <strong>Haresh Kumar</strong>, a passionate MERN Stack Developer
            focused on building scalable, secure, and user-friendly web
            applications. I enjoy transforming ideas into real-world products
            using MongoDB, Express.js, React.js, and Node.js while writing
            clean, maintainable code.
          </p>
          <p className="reveal d3 text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
            I believe great software is built with simplicity, performance, and
            reliability in mind. Whether it's designing REST APIs, developing
            responsive frontends, or integrating databases, I strive to deliver
            solutions that are efficient, scalable, and ready for production.
          </p>
          <div className="reveal d4">
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">
              Technologies I Work With
            </p>
            <div
              className="flex flex-wrap gap-2"
              role="list"
              aria-label="Skills"
            >
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                MongoDB
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Express.js
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                React.js
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Node.js
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                JavaScript (ES6+)
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Tailwind CSS
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                MySQL
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                REST APIs
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                JWT Authentication
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Git & GitHub
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Postman
              </span>
              <span
                role="listitem"
                className="stag text-sm bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-3.5 py-1.5 rounded-full hover:border-accent"
              >
                Firebase Authentication
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
