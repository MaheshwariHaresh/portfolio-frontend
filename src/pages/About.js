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
          <div className="reveal d4 flex flex-wrap gap-8 pt-8">
            <div>
              <h3 className="text-3xl font-bold text-accent">15+</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Technologies
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent">5+</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Full Stack Projects
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-accent">100%</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Responsive Design
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
