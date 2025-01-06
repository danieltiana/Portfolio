import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projets = [
    {
      title: "Ikandra",
      description: "Mini-plateforme de recrutement et GRH",
      image: "img/ikandra.jpg",
      tech: ["Html", "css", "PHP", "Mysql"],
      lien: "",
      github: "https://github.com/danieltiana/ikandra",
    },
    {
      title: "Magic-Mastering",
      description: "Refonte prestashop 8.2",
      image: "img/magic.jpg",
      tech: ["php", "Js", "Html", "css"],
      lien: "https://www.serveur28.projets-omega.net",
      github: "",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-12">projets</h2>
      <div className="grid md:grid-cols-2 gap-8" data-aos="fade-down">
        {projets.map((project) => (
          <div key={project.title} className="group relative">
            <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>

              <div className="relative p-8">
                <h3 className="text-2xl font-semibold text-gray-200 mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.lien && (
                    <>
                      <a href={project.lien} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">visiter le site web</span>
                      </a>
                    </>
                  )}

                  {project.github && (
                    <>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Code Source</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
