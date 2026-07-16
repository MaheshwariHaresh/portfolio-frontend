import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCss3Alt,
  FaKey,
  FaGoogle,
  FaLink,
} from "react-icons/fa";

import { MdArchitecture, MdEmail } from "react-icons/md";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiVercel,
  SiTailwindcss,
  SiHtml5,
  SiPassport,
  SiCloudinary,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <FaLink /> },
      { name: "JWT Authentication", icon: <FaKey /> },
      { name: "Passport.js", icon: <SiPassport /> },
      { name: "Google & Facebook OAuth", icon: <FaGoogle /> },
      { name: "Nodemailer", icon: <MdEmail /> },
      { name: "MVC Architecture", icon: <MdArchitecture /> },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[5px] text-accent font-semibold mb-3">
          Tech Stack
        </p>

        <h2 className="font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">
          Technologies I Work With
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-zinc-500 dark:text-zinc-400">
          Technologies and tools I use to build fast, scalable and modern web
          applications.
        </p>
      </div>

      <div className="space-y-14">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <div className="flex items-center gap-4 mb-7">
              <h3 className="font-semibold text-2xl text-zinc-900 dark:text-white">
                {group.title}
              </h3>

              <div className="flex-1 h-px bg-gradient-to-r from-accent/70 via-zinc-300 dark:via-zinc-700 to-transparent"></div>
            </div>

            <div className="flex flex-wrap gap-5">
              {group.skills.map((skill) => (
                <div key={skill.name} className="group cursor-pointer">
                  <div
                    className="
                      flex
                      items-center
                      gap-4
                      px-6
                      py-4
                      rounded-2xl
                      bg-white/70
                      dark:bg-zinc-900/80
                      backdrop-blur-xl
                      border
                      border-zinc-200
                      dark:border-zinc-800
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-accent
                      hover:shadow-[0_0_30px_rgba(249,115,22,.35)]
                    "
                  >
                    <div
                      className="
                        text-3xl
                        text-accent
                        transition-transform
                        duration-300
                        group-hover:scale-125
                        group-hover:rotate-6
                      "
                    >
                      {skill.icon}
                    </div>

                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
