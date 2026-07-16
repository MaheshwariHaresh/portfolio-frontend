import { useTheme } from "../context/theme";

const Header = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  activeSection,
  scrolled,
}) => {
  const { theme, toggleTheme } = useTheme();
  const dark = theme === "dark";
  return (
    <div>
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-display font-bold text-xl tracking-tight relative z-10"
        >
          <span className="text-zinc-900 dark:text-white">har</span>
          <span className="text-accent">esh</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          <li>
            <a
              href="#services"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "services"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "work"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "about"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              About
            </a>
          </li>
          {/* <li>
            <a
              href="#reviews"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "reviews"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              Reviews
            </a>
          </li> */}
          <li>
            <a
              href="#skills"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "skills"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nl text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeSection === "contact"
                  ? "on !text-zinc-900 dark:!text-white"
                  : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {/* dark toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {!dark ? (
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
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            ) : (
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
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            )}
          </button>

          {/* hire me */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors"
          >
            Hire me{" "}
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

          {/* hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle menu"
          >
            {!mobileMenuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium">
            <li>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                About
              </a>
            </li>
            {/* <li>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Reviews
              </a>
            </li> */}
            <li>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors"
              >
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Hire me →
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
