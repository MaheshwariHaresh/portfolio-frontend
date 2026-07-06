import { useEffect, useRef, useState } from "react";

function Blog() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("all");
  const rootRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDark(savedTheme === "dark" || (!savedTheme && prefersDark));

    const handleScroll = () => setScrolled(window.scrollY > 20);
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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const revealElements = rootRef.current?.querySelectorAll(".reveal") ?? [];
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div
      ref={rootRef}
      className={`scroll-smooth ${dark ? "dark" : ""} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-body antialiased`}
    >
      <style>{`*,*::before,*::after{box-sizing:border-box;}html{font-family:'DM Sans',sans-serif;}h1,h2,h3,h4,h5,h6{font-family:'PT Sans',sans-serif;}.reveal{opacity:0;transform:translateY(24px);transition:opacity .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1);}.reveal.visible{opacity:1;transform:translateY(0);}.reveal-delay-1{transition-delay:.08s;}.reveal-delay-2{transition-delay:.16s;}.reveal-delay-3{transition-delay:.24s;}.reveal-delay-4{transition-delay:.32s;}.reveal-delay-5{transition-delay:.4s;}.reveal-delay-6{transition-delay:.48s;}.nav-link{position:relative;}.nav-link::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:currentColor;transition:width .25s cubic-bezier(.4,0,.2,1);}.nav-link:hover::after{width:100%;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:transparent;}::-webkit-scrollbar-thumb{background:#FF6B2B;border-radius:99px;}body{transition:background-color .3s,color .3s;}body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;z-index:0;opacity:.4;}.card{transition:transform .3s cubic-bezier(.4,0,.2,1),border-color .2s;}.card:hover{transform:translateY(-3px);}.btn-primary{position:relative;overflow:hidden;}.btn-primary::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:rgba(255,255,255,.18);transform:skewX(-20deg);transition:left .4s cubic-bezier(.4,0,.2,1);}.btn-primary:hover::after{left:160%;}[x-cloak]{display:none!important;}.photo-frame{position:relative;overflow:hidden;background:#e4e4e7;}.photo-frame img{width:100%;height:100%;object-fit:cover;display:block;}`}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="index.html"
            className="font-display font-bold text-xl tracking-tight z-10"
            aria-label="Back to home"
          >
            <span className="text-zinc-900 dark:text-white">eli</span>
            <span className="text-accent">ott</span>
          </a>
          <ul
            className="hidden md:flex items-center gap-8 text-sm font-medium"
            role="list"
          >
            <li>
              <a
                href="index.html#services"
                className="nav-link text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="projects.html"
                className="nav-link text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="index.html#about"
                className="nav-link text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="blog.html"
                className="nav-link text-accent font-medium"
                style={{ "--tw-text-opacity": "1" }}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="index.html#contact"
                className="nav-link text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setDark((prev) => !prev)}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label={dark ? "Light mode" : "Dark mode"}
            >
              {!dark ? (
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
                    d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                  />
                </svg>
              ) : (
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
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              )}
            </button>
            <a
              href="index.html#contact"
              className="hidden md:inline-flex items-center gap-2 btn-primary bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
            >
              Hire me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenu((prev) => !prev)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
              aria-expanded={mobileMenu}
              aria-label="Toggle menu"
            >
              {!mobileMenu ? (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {mobileMenu && (
          <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
            <ul
              className="flex flex-col px-6 py-4 gap-4 text-sm font-medium"
              role="list"
            >
              <li>
                <a
                  href="index.html#services"
                  onClick={() => setMobileMenu(false)}
                  className="block text-zinc-700 dark:text-zinc-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="projects.html"
                  onClick={() => setMobileMenu(false)}
                  className="block text-zinc-700 dark:text-zinc-300"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  href="index.html#about"
                  onClick={() => setMobileMenu(false)}
                  className="block text-zinc-700 dark:text-zinc-300"
                >
                  About
                </a>
              </li>
              <li>
                <a href="blog.html" className="block text-accent font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="index.html#contact"
                  onClick={() => setMobileMenu(false)}
                  className="block text-zinc-700 dark:text-zinc-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <main>
        <section className="pt-36 pb-16 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
              Writing
            </p>
            <h1 className="reveal reveal-delay-1 font-display font-bold text-5xl md:text-6xl text-zinc-900 dark:text-white leading-tight mb-4">
              The Blog
            </h1>
            <p className="reveal reveal-delay-2 text-lg text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
              Thoughts on UI/UX design, frontend development, and the realities
              of full-time freelancing. No fluff.
            </p>

            <div className="reveal reveal-delay-3 flex flex-wrap gap-2 mt-8">
              <button
                type="button"
                onClick={() => setActive("all")}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  active === "all"
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActive("design")}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  active === "design"
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
                }`}
              >
                Design
              </button>
              <button
                type="button"
                onClick={() => setActive("dev")}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  active === "dev"
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
                }`}
              >
                Dev
              </button>
              <button
                type="button"
                onClick={() => setActive("freelance")}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  active === "freelance"
                    ? "bg-accent text-white border-accent"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700 hover:border-accent"
                }`}
              >
                Freelance
              </button>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <a
              href="blog-article.html"
              className="reveal group block rounded-3xl overflow-hidden bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-accent transition-colors"
            >
              <div className="grid md:grid-cols-2">
                <div className="photo-frame h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
                    alt="Why I ditched CSS frameworks"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Design
                    </span>
                    <span className="text-xs text-zinc-400">
                      March 8, 2025 · 7 min read
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                    Why I ditched heavy CSS frameworks for Tailwind — and what
                    changed
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    After years of fighting specificity wars and unused
                    kilobytes, here's what finally convinced me to make the
                    switch — and the measurable impact it had on both my
                    workflow and my clients' performance scores.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent nav-link">
                    Read article →
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <article className="reveal reveal-delay-1 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&q=80"
                    alt="Design systems"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Dev
                    </span>
                    <span className="text-xs text-zinc-400">Feb 21, 2025</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Building a design system from scratch in a weekend
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    Tokens, components, docs — the exact process I follow to
                    spin up a coherent design system in 48 hours.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>

              <article className="reveal reveal-delay-2 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=80"
                    alt="Freelance lessons"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Freelance
                    </span>
                    <span className="text-xs text-zinc-400">Jan 14, 2025</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      5 lessons from my first year of full-time freelancing
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    Contracts, pricing, scope creep, burnout — the things nobody
                    tells you before you go solo.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>

              <article className="reveal reveal-delay-3 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=700&q=80"
                    alt="Alpine.js article"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Dev
                    </span>
                    <span className="text-xs text-zinc-400">Dec 3, 2024</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Alpine.js is the jQuery of the modern era — and that's a
                      compliment
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    No build step, no virtual DOM, no config hell. Just sprinkle
                    some behaviour and ship.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>

              <article className="reveal reveal-delay-1 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&q=80"
                    alt="UX laws article"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Design
                    </span>
                    <span className="text-xs text-zinc-400">Nov 18, 2024</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      The 7 UX laws every frontend dev should memorise
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    Fitts's Law, Hick's Law, Jakob's Law — the cognitive science
                    behind every good interface decision.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>

              <article className="reveal reveal-delay-2 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=80"
                    alt="Client management"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Freelance
                    </span>
                    <span className="text-xs text-zinc-400">Oct 30, 2024</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      How I manage 3 client projects at once without losing my
                      mind
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    My exact Notion setup, communication rhythms, and the one
                    rule I never break.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>

              <article className="reveal reveal-delay-3 card group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                <div className="photo-frame w-full h-44">
                  <img
                    src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80"
                    alt="Dark mode article"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                      Dev
                    </span>
                    <span className="text-xs text-zinc-400">Oct 5, 2024</span>
                  </div>
                  <a href="blog-article.html">
                    <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                      Dark mode done right: beyond just inverting colours
                    </h3>
                  </a>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                    Contrast ratios, elevation, shadows — what most dark mode
                    implementations get completely wrong.
                  </p>
                  <a
                    href="blog-article.html"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nav-link"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            </div>

            <nav
              className="reveal flex items-center justify-center gap-2 mt-14"
              aria-label="Pagination"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent text-white text-sm font-medium">
                1
              </span>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
              >
                2
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
              >
                3
              </a>
              <span className="text-zinc-400 text-sm px-1">…</span>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-accent hover:text-accent transition-colors text-sm"
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            © {currentYear} Eliott. All rights reserved. <br /> Developed by{" "}
            <a
              href="https://lbegey78.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              Laurent Begey
            </a>{" "}
            • Distributed by{" "}
            <a
              href="https://themewagon.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              ThemeWagon
            </a>
          </p>
          <p className="text-xs text-zinc-500">
            Built with{" "}
            <a
              href="https://tailwindcss.com"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS
            </a>{" "}
            &amp;{" "}
            <a
              href="https://alpinejs.dev"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
              rel="noopener noreferrer"
              target="_blank"
            >
              Alpine.js
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Blog;
