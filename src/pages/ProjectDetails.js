import { useEffect, useRef, useState } from "react";

function ProjectDetails() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [progress, setProgress] = useState(0);
  const rootRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    setDark(savedTheme === "dark" || (!savedTheme && prefersDark));

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 20);
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

  useEffect(() => {
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

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
              href="projects.html"
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
                SaaS
              </span>
              <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                Figma
              </span>
              <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2.5 py-1 rounded-full">
                Tailwind
              </span>
              <span className="text-xs text-zinc-400 ml-1">2025 · 6 weeks</span>
            </div>

            <h1 className="reveal font-display font-bold text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-tight mb-6">
              Novu — SaaS Dashboard Redesign
            </h1>

            <p className="reveal d1 text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
              A complete UX and UI overhaul of a B2B notification management
              platform — reducing cognitive load, streamlining the core
              workflow, and converting more trial users into paying customers.
            </p>

            <div className="reveal d2 grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-zinc-100 dark:border-zinc-900">
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Client
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Novu Inc.
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
                  Role
                </p>
                <p className="font-medium text-zinc-900 dark:text-white text-sm">
                  Lead UI/UX Designer
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
            </div>
          </header>

          <div className="max-w-6xl mx-auto px-6 mb-16">
            <div className="reveal photo-frame w-full h-72 md:h-[480px] rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1400&q=80"
                alt="Novu — SaaS Dashboard redesign hero"
                loading="eager"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 mb-16">
            <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  −40%
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                  Cognitive load (SUS score)
                </p>
              </div>
              <div className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
                <p className="font-display font-bold text-3xl text-accent">
                  +27%
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                  Trial-to-paid conversion
                </p>
              </div>
              <div className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  −35%
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                  Support tickets (onboarding)
                </p>
              </div>
              <div className="stat-card bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-5 pl-6">
                <p className="font-display font-bold text-3xl text-zinc-900 dark:text-white">
                  4.8/5
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">
                  Post-launch NPS
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>The brief</h2>
            <p>
              Novu is a B2B notification infrastructure platform — it lets
              developers route, manage, and monitor notifications across email,
              SMS, push, and in-app channels. The product was technically solid,
              but the dashboard had grown organically over two years without a
              coherent design strategy. By early 2025, the team were seeing high
              churn in the 14-day trial window and receiving consistent feedback
              that the platform was "powerful but overwhelming."
            </p>
            <p>
              My mandate was simple: fix the first-hour experience without
              rebuilding the product from scratch. The budget was fixed and the
              engineering team had six weeks to ship.
            </p>
            <blockquote>
              <p>
                "We're losing users in the first 20 minutes. They sign up, see
                the dashboard, and just bounce. The product does exactly what
                they need — they just can't find it."
              </p>
            </blockquote>
            <h2>Discovery & research</h2>
            <h3>User interviews</h3>
            <p>
              I ran 9 user interviews with a mix of current paying customers and
              recently churned trial users. The sessions were 45-minute
              moderated usability tests combined with post-task interviews. Key
              findings:
            </p>
            <ul>
              <li>
                7 of 9 users couldn't locate the "Workflows" section without
                help during their first session
              </li>
              <li>
                The notification log and the analytics panel were confused for
                one another by 5 users
              </li>
              <li>
                The sidebar had 14 top-level navigation items — users reported
                feeling "unsure where to start"
              </li>
              <li>
                Trial users specifically wanted a "get your first notification
                live" path, not a feature overview
              </li>
            </ul>
            <h3>Heuristic audit</h3>
            <p>
              I ran a full Nielsen heuristic evaluation of the existing
              interface and identified 23 violations across 6 categories. The
              most critical were around visibility of system status, recognition
              over recall, and error prevention in the workflow builder.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 mb-4">
            <div className="reveal photo-frame w-full h-56 md:h-80 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=1200&q=80"
                alt="Existing dashboard audit — heuristic violations mapped"
                loading="lazy"
              />
            </div>
            <p className="img-caption">
              Existing dashboard with heuristic violations annotated during the
              audit phase.
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>Design strategy</h2>
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
                  Progressive disclosure
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Show only what's needed for the current task. Advanced
                  features revealed on demand, not upfront.
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
                  Opinionated navigation
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Reduce the sidebar to 6 core items. Group secondary actions in
                  context panels rather than global nav.
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
                  Goal-first onboarding
                </h3>
                <p
                  className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed"
                  style={{ margin: 0, color: "inherit" }}
                >
                  Replace the feature tour with a 3-step "send your first
                  notification" flow that delivers an aha-moment in under 5
                  minutes.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-4 prose-cs">
            <h2>Process</h2>
            <h3>Week 1–2 · Information architecture</h3>
            <p>
              I ran a card sorting exercise with 12 participants to rebuild the
              navigation taxonomy from scratch. The 14-item sidebar collapsed to
              6 primary destinations. I then produced low-fidelity wireframes in
              Figma for the 8 most-visited screens, running rapid async reviews
              with the product team using Loom walkthroughs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-6 mb-12">
            <div className="reveal space-y-4">
              <div className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="step-badge shrink-0 mt-0.5">1</div>
                <div>
                  <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    Card sorting + IA rebuild
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Remote card sort with 12 participants via Optimal Workshop.
                    14 nav items → 6 clear destinations with zero ambiguous
                    groupings.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="step-badge shrink-0 mt-0.5">2</div>
                <div>
                  <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    Lo-fi wireframes & async review
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    8 key screens sketched in Figma wireframe mode. Async review
                    via Loom with the product team — 3 iteration rounds over 4
                    days.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="step-badge shrink-0 mt-0.5">3</div>
                <div>
                  <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    Hi-fi design & component library
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Full Figma component library built on Auto Layout. 40+
                    components covering all states (empty, loading, error). Dark
                    mode tokens included.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="step-badge shrink-0 mt-0.5">4</div>
                <div>
                  <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    Usability testing & iteration
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    5 moderated sessions on the hi-fi prototype. 2 significant
                    UX issues surfaced and resolved before handoff. SUS score
                    improved from 54 → 82.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="step-badge shrink-0 mt-0.5">5</div>
                <div>
                  <p className="font-display font-bold text-zinc-900 dark:text-white mb-1">
                    Handoff & front-end support
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    Zeroheight design doc + Tailwind CSS implementation of the
                    new design tokens. Present during sprint to support the
                    engineering team on edge cases.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-6 mb-4">
            <div className="reveal photo-frame w-full h-56 md:h-80 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
                alt="High-fidelity Figma screens — new dashboard layout"
                loading="lazy"
              />
            </div>
            <p className="img-caption">
              Final hi-fi screens showing the redesigned sidebar, dashboard
              home, and notification workflow builder.
            </p>
          </div>

          <div className="max-w-5xl mx-auto px-6 mb-12">
            <div className="reveal grid md:grid-cols-2 gap-4">
              <div>
                <div className="photo-frame w-full h-52 rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=700&q=80"
                    alt="Before — original dashboard"
                    loading="lazy"
                  />
                </div>
                <p className="img-caption mt-2">
                  Before — 14-item sidebar, no clear entry point
                </p>
              </div>
              <div>
                <div className="photo-frame w-full h-52 rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=80"
                    alt="After — redesigned dashboard"
                    loading="lazy"
                  />
                </div>
                <p className="img-caption mt-2">
                  After — 6-item sidebar, goal-first onboarding checklist
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 pb-16 prose-cs">
            <h2>Key design decisions</h2>
            <h3>Collapsing the sidebar</h3>
            <p>
              The original sidebar mixed primary destinations with contextual
              actions and account settings indiscriminately. I applied a strict
              three-tier hierarchy: primary navigation (6 items, always
              visible), contextual actions (appear in a right panel when
              relevant), and account/settings (collapsed under an avatar menu).
              This alone reduced the cognitive entry cost significantly — users
              knew where they were and where they could go.
            </p>
            <h3>The onboarding checklist</h3>
            <p>
              Rather than a product tour, I designed a persistent but
              dismissible checklist embedded in the dashboard home. Three steps:
              connect a channel, create a workflow, send a test notification.
              Each step launches an inline mini-wizard that completes within the
              dashboard without breaking context. In the first month
              post-launch, 68% of trial users completed all three steps vs 21%
              previously.
            </p>
            <h3>Empty states as teachers</h3>
            <p>
              Every empty state in the old design was a blank panel. In the
              redesign, each empty state includes a one-sentence explanation of
              what the section does, a primary CTA, and a secondary link to
              documentation. This reduced support tickets specifically about
              feature discovery by 35%.
            </p>
            <h2>Results</h2>
            <p>
              The redesign shipped in week 6, exactly on schedule. Metrics were
              tracked over the following 6 weeks post-launch compared to the
              same prior period.
            </p>
            <ul>
              <li>
                <strong>SUS (System Usability Scale) score:</strong> 54 → 82
                (+28 points)
              </li>
              <li>
                <strong>Trial-to-paid conversion rate:</strong> +27%
              </li>
              <li>
                <strong>Onboarding completion (3-step flow):</strong> 21% → 68%
              </li>
              <li>
                <strong>Support tickets (onboarding-related):</strong> −35%
              </li>
              <li>
                <strong>Average time to first workflow created:</strong> 18 min
                → 4 min
              </li>
              <li>
                <strong>Post-launch NPS:</strong> 4.8/5
              </li>
            </ul>
            <blockquote>
              <p>
                "Eliott completely changed how we think about our onboarding.
                The checklist alone added 6 figures to our ARR in the first
                quarter. Exceptionally thorough process and a pleasure to work
                with."
              </p>
            </blockquote>
            <h2>Reflections</h2>
            <p>
              The biggest lesson from this project: most SaaS UX problems aren't
              about aesthetics, they're about information architecture. The
              product was capable — users just couldn't find the value fast
              enough. A focused IA overhaul delivered more measurable ROI than a
              visual rebrand ever could have.
            </p>
            <p>
              If I were to do it again, I'd push harder for a longer discovery
              phase. Six weeks is tight for a full dashboard redesign, and we
              had to make some navigation decisions based on incomplete
              card-sort data. The results held up, but another round of testing
              before hi-fi would have given me more confidence on a few
              borderline calls.
            </p>
            <hr />
            <p>
              <em>
                Interested in a similar engagement?{" "}
                <a href="index.html#contact">Get in touch</a> — I'm available
                for new projects from Q2 2025.
              </em>
            </p>
          </div>
        </article>

        <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16">
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
        </section>

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
                <a
                  href="index.html#contact"
                  className="inline-flex items-center gap-2 btn-primary bg-accent text-white font-medium px-8 py-3.5 rounded-full hover:bg-accent-light transition-colors"
                >
                  Start a project →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProjectDetails;
