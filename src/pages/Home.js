import { useState, useEffect, useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Work from "./Work";
import Services from "./Services";
import Hero from "./Hero";
import Header from "../components/Header";
import { useTheme } from "../context/theme";
import Skills from "./Skills";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

export default function Home() {
  const { theme } = useTheme();
  const dark = theme === "dark";
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const yearRef = useRef(null);
  useRevealOnScroll();

  // Update year in footer
  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.textContent = new Date().getFullYear();
    }
  }, []);

  // Scroll listener for header shadow and section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      updateSection();
    };

    handleScroll(); // <-- IMPORTANT
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const updateSection = () => {
  //   const atBottom =
  //     window.innerHeight + window.scrollY >= document.body.scrollHeight - 60;
  //   if (atBottom) {
  //     setActiveSection("contact");
  //     return;
  //   }
  //   const ids = ["hero", "services", "work", "about", "skills", "contact"];
  //   for (const id of ids) {
  //     const el = document.getElementById(id);
  //     if (el && window.scrollY >= el.offsetTop - 130) {
  //       setActiveSection(id);
  //       return;
  //     }
  //   }
  // };

  const updateSection = () => {
    const sections = document.querySelectorAll("main section");

    let current = "hero";

    sections.forEach((section) => {
      const top = section.offsetTop - 150;
      const bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        current = section.id;
      }
    });

    setActiveSection(current);
  };
  return (
    <div className={`${dark ? "dark" : ""} scroll-smooth`}>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        html{scroll-behavior:smooth}
        html,body{font-family:'DM Sans',sans-serif}
        h1,h2,h3,h4,h5,h6{font-family:'PT Sans',sans-serif}
        body{margin:0;transition:background-color .3s,color .3s}

        /* noise overlay */
        body::before{content:'';position:fixed;inset:0;pointer-events:none;z-index:0;opacity:.35;
        background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.05'/%3E%3C/svg%3E")}

        /* scrollbar */
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:#FF6B2B;border-radius:99px}

        /* reveal on scroll */
        .reveal{opacity:0;transform:translateY(26px);transition:opacity .6s cubic-bezier(.4,0,.2,1),transform .6s cubic-bezier(.4,0,.2,1)}
        .reveal.in{opacity:1;transform:none}
        .d1{transition-delay:.08s}.d2{transition-delay:.16s}.d3{transition-delay:.24s}.d4{transition-delay:.32s}

        /* nav underline animation */
        .nl{position:relative}
        .nl::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1.5px;background:currentColor;transition:width .22s cubic-bezier(.4,0,.2,1)}
        .nl:hover::after,.nl.on::after{width:100%}
        .nl.on{font-weight:500}

        /* shimmer button */
        .shimmer{position:relative;overflow:hidden}
        .shimmer::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:rgba(255,255,255,.18);transform:skewX(-20deg);transition:left .4s cubic-bezier(.4,0,.2,1)}
        .shimmer:hover::after{left:160%}

        /* photo frames */
        .pf{overflow:hidden;background:#d4d4d8}
        .pf img{width:100%;height:100%;object-fit:cover;display:block}

        /* card hover */
        .card-h{transition:transform .28s cubic-bezier(.4,0,.2,1),border-color .18s}
        .card-h:hover{transform:translateY(-4px)}

        /* skill tag */
        .stag{transition:border-color .18s}

        [x-cloak]{display:none!important}
      `}</style>

      <div className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
        {/* ═══ NAV ═══ */}
        <header
          className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5"
              : ""
          }`}
        >
          <Header
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            activeSection={activeSection}
            scrolled={scrolled}
          />
        </header>

        <main>
          {/* ═══ HERO ═══ */}
          <section
            id="hero"
            className="relative min-h-screen flex items-center pt-16 overflow-hidden"
          >
            <Hero />
          </section>

          {/* ═══ SERVICES ═══ */}
          <section
            id="services"
            className="py-24 bg-zinc-50 dark:bg-zinc-900/40"
          >
            <Services />
          </section>

          {/* ═══ WORK ═══ */}
          <section id="work" className="py-24">
            <Work />
          </section>

          {/* ═══ ABOUT ═══ */}
          <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
            <About />
          </section>

          {/* ═══ SKILLS ═══ */}
          <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
            <Skills />
          </section>
          {/* ═══ TESTIMONIALS ═══ */}
          {/* <section id="reviews" className="py-24">
            <Testimonials />
          </section> */}

          {/* ═══ BLOG ═══ */}
          {/* { <section id="blog" className="py-24 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
                <div>
                  <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">
                    Thoughts
                  </p>
                  <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
                    From the blog
                  </h2>
                </div>
                <a
                  href="blog.html"
                  className="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors self-start sm:self-auto nl"
                >
                  All articles →
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <article className="reveal d1 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                  <div className="pf w-full h-44">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&q=80"
                      alt="Why I ditched CSS frameworks"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">
                        Design
                      </span>
                      <span className="text-xs text-zinc-400">Mar 8, 2025</span>
                    </div>
                    <a href="blog-article.html">
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        Why I ditched heavy CSS frameworks for Tailwind
                      </h3>
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                      After years of fighting specificity wars, here's what
                      finally convinced me to make the switch.
                    </p>
                    <a
                      href="blog-article.html"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                    >
                      Read more →
                    </a>
                  </div>
                </article>

                <article className="reveal d2 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                  <div className="pf w-full h-44">
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
                      <span className="text-xs text-zinc-400">
                        Feb 21, 2025
                      </span>
                    </div>
                    <a href="blog-article.html">
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        Building a design system from scratch in a weekend
                      </h3>
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                      Tokens, components, docs — the process I follow to spin up
                      a coherent system in 48 hours.
                    </p>
                    <a
                      href="blog-article.html"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                    >
                      Read more →
                    </a>
                  </div>
                </article>

                <article className="reveal d3 card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">
                  <div className="pf w-full h-44">
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
                      <span className="text-xs text-zinc-400">
                        Jan 14, 2025
                      </span>
                    </div>
                    <a href="blog-article.html">
                      <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                        5 lessons from my first year of full-time freelancing
                      </h3>
                    </a>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                      Contracts, pricing, scope creep — the things nobody tells
                      you before you go solo.
                    </p>
                    <a
                      href="blog-article.html"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl"
                    >
                      Read more →
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </section>  */}

          {/* ═══ CONTACT ═══ */}
          <section id="contact" className="py-24">
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-100 dark:border-zinc-900">
          <Footer yearRef={yearRef} />
        </footer>
      </div>
    </div>
  );
}
