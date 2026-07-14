const Footer = ({ yearRef }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-zinc-400 text-center sm:text-left">
        © <span ref={yearRef}></span> Haresh Kumar. All rights reserved.
        <br />
        Designed & Developed by{" "}
        <span className="font-semibold text-zinc-600 dark:text-zinc-300">
          Haresh Kumar
        </span>
      </p>

      <p className="text-xs text-zinc-500 text-center sm:text-right">
        Crafted with{" "}
        <a
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          React
        </a>{" "}
        •{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          Tailwind CSS
        </a>{" "}
        • Express • Node.js • MongoDB
      </p>
    </div>
  );
};

export default Footer;
