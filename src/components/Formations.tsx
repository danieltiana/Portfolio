import { FaBrain as brain } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";

import { FaUserGraduate as UserGraduate } from "react-icons/fa";

export default function Formations() {
  const formations = [
    {
      icon: UserGraduate,
      titre: "Diplôme",
      description: "Diplôme de technicien supérieur",
      date: "juillet 2024",
      ecole: "Espic Madagascar",
    },
    {
      icon: brain,
      titre: "Auto didacte",
      description: "Apprentissage basique et autonomme basiqque de developpement",
      date: "Depuis 2022 - aujourd'hui",
      ecole: "Projets d'apprentissage basique",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-8">Formations</h2>
      <hr />
      <div className="grid md:grid-cols-6 lg:grid-cols-2 gap-8 items-stretch">
        {formations.map((formation) => {
          const Icon = formation.icon;
          return (
            <div key={formation.titre} className="group relative ">
              <div className="relative p-8  backdrop-blur-sm rounded-2xl shadow">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                <h3 className="text-xl font-semibold text-gray-200 mb-4 flex item-center gap-5">
                  <Icon className="w-10 h-10 text-blue-400 mb-6" />
                  {formation.titre}
                </h3>
                <ul className=""></ul>
                <div>
                  <span className="flex gap-5 items-center">
                    <BsFillCalendarDateFill style={{ color: "gray" }} />
                    <span className="text-gray-400 d-inline">{formation.date}</span>
                  </span>
                </div>
                <div>
                  <span className="text-gray-400">
                    {formation.description} {formation.ecole && " - " + formation.ecole}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <hr />
      </div>
    </div>
  );
}
