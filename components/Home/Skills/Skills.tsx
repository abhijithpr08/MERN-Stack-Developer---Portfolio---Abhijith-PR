"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiGit,
  SiGithub,
  SiPostman,
  SiMysql
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "HTML", icon: <SiHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: <SiCss3 />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, link: "https://tailwindcss.com/docs" },
  { name: "Bootstrap", icon: <SiBootstrap />, link: "https://getbootstrap.com/docs" },
  { name: "React.js", icon: <SiReact />, link: "https://react.dev" },
  { name: "Next.js", icon: <SiNextdotjs />, link: "https://nextjs.org/docs" },
  { name: "JavaScript", icon: <SiJavascript />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: <SiTypescript />, link: "https://www.typescriptlang.org/docs" },

  { name: "Node.js", icon: <SiNodedotjs />, link: "https://nodejs.org/en/docs" },
  { name: "Express.js", icon: <SiExpress />, link: "https://expressjs.com/" },
  { name: "REST API Dev", icon: <TbApi />, link: "https://restfulapi.net/" },
  { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com/docs/" },
  { name: "MySQL", icon: <SiMysql />, link: "https://dev.mysql.com/doc/" },
  { name: "PostgreSQL", icon: <SiPostgresql />, link: "https://www.postgresql.org/docs/" },
  { name: "Redux", icon: <SiRedux />, link: "https://redux.js.org/" },
  { name: "Git", icon: <SiGit />, link: "https://git-scm.com/docs" },
  { name: "GitHub", icon: <SiGithub />, link: "https://docs.github.com/" },

  { name: "Postman", icon: <SiPostman />, link: "https://learning.postman.com/" },
  { name: "VS Code", icon: <VscVscode />, link: "https://code.visualstudio.com/docs" },
];


const rows = [
  skills.slice(0, 8),
  skills.slice(8, 15),
  skills.slice(15, 19),
  skills.slice(19),
];

const Skills = () => {
  return (
    <div id="skills" className="text-white pt-16 pb-20">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-16">
        My <span className="text-cyan-300">Skills</span>
      </h1>

      <div className="flex flex-col items-center gap-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-8 flex-wrap">
            {row.map((skill, i) => (
              <Tilt
  key={skill.name}
  tiltMaxAngleX={10}
  tiltMaxAngleY={10}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1200}
>
<a href={skill.link} target="_blank" rel="noopener noreferrer" className="block">
    <div className="group bg-[#14134145] backdrop-blur-md border border-white/10 text-center w-36 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg transform transition duration-300 hover:scale-125 hover:-translate-y-2 hover:shadow-cyan-500/30">
      <div className="text-5xl mb-4 text-gray-400 group-hover:text-cyan-300 transition duration-300">
        {skill.icon}
      </div>
      <p className="text-sm text-purple-300 font-medium">
        {skill.name}
      </p>
    </div>
  </a>
</Tilt>

            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
