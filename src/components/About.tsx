import { BsGit } from "react-icons/bs";
import { SiAdobeindesign } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { ImTrello } from "react-icons/im";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { BsPaletteFill as Palette } from "react-icons/bs";
import { Code, Brain, Rocket } from "lucide-react";

export default function About() {
  const skills = [
    {
      icon: Code,
      title: "Frontend",
      items: [
        { title: "React", icons: <FaReact /> },
        { title: "Html/css", icons: <AiFillHtml5 /> },
        { title: "Javascript", icons: <DiJavascript /> },
      ],
    },
    {
      icon: Brain,
      title: "Backend",
      items: [
        { title: "PHP", icons: <SiPhp /> },
        { title: "MySql", icons: <SiMysql /> },
        { title: "Javascript", icons: <DiJavascript /> },
      ],
    },
    {
      icon: Rocket,
      title: "Outils",
      items: [
        { title: "Git", icons: <BsGit /> },
        { title: "Trello", icons: <ImTrello /> },
        { title: "GitBash", icons: <BsGit /> },
      ],
    },
    {
      icon: Palette,
      title: "Design",
      items: [
        { title: "Adobe Photoshop", icons: <SiAdobephotoshop /> },
        { title: "Adobe Illustrator", icons: <SiAdobeillustrator /> },
        { title: "Adobe Indesign", icons: <SiAdobeindesign /> },
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-8">A propos</h2>
      <p className="text-xl text-gray-400 leading-relaxed mb-12">
        Passionné de la developpement web et design moderne. Spécialisé de la création inituitive pour répondre aux besoins et résoudre les problèmes pour la numérisation et digitalisation.
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div key={skill.title} className="group relative">
              <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <Icon className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-gray-200 mb-4">{skill.title}</h3>
                <ul className="space-y-3">
                  {skill.items.map((item) => {
                    const icons = item.icons;
                    return (
                      <li key={item.title} className="text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/40" />
                        {icons}
                        {item.title}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
