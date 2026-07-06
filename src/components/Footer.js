const Footer = ({ yearRef }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-zinc-400">
        © <span ref={yearRef}></span> Haresh Kumar. All rights reserved. <br />{" "}
        Developed by{" "}
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
        Built with
        <a
          href="https://tailwindcss.com"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          {" "}
          Tailwind CSS
        </a>{" "}
        &amp;
        <a
          href="https://react.dev"
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-accent transition-colors"
        >
          {" "}
          React
        </a>
      </p>
    </div>
  );
};

export default Footer;
