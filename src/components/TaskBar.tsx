import { BsMortarboardFill as Educations } from "react-icons/bs";
import { IoMdMail as Mail } from "react-icons/io";
import { BsFillBriefcaseFill as Briefcase } from "react-icons/bs";
import { AiFillHome as Home } from "react-icons/ai";
import { HiViewGrid as MenuGrid } from "react-icons/hi";
import { BsPersonVcardFill as Me } from "react-icons/bs";

interface TaskBarProps {
  activeWindow: string;
  setActiveWindow: (window: string) => void;
  setClassicMode: (mode: boolean) => void;
}

export default function TaskBar({ activeWindow, setActiveWindow, setClassicMode }: TaskBarProps) {
  const taskBarItems = [
    { id: "home", icon: Home, label: "Accueil" },
    { id: "Education", icon: Educations, label: "Diplômes et formation" },
    { id: "about", icon: Me, label: "A propos" },
    { id: "projects", icon: Briefcase, label: "Projets" },
    { id: "contact", icon: Mail, label: "Contact" },
    { id: "classic", icon: MenuGrid, label: "Mode Classique" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-gray-950/80 backdrop-blur-xl border-t border-gray-800">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-1/3 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>

      <div className="relative h-full flex items-center justify-center gap-2 px-4">
        <div className="flex gap-3">
          {taskBarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeWindow === item.id;
            const isClassic = item.id === "classic";

            return (
              <button
                key={item.id}
                onClick={() => (isClassic ? setClassicMode(true) : setActiveWindow(item.id))}
                className={`group relative p-4 rounded-xl transition-all duration-300
                  ${isActive ? "bg-gradient-to-b from-gray-800/80 to-gray-900/80" : "hover:bg-gray-800/50"}
                  ${isClassic ? "ml-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10" : ""}`}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-20 transition-opacity" />

                <Icon className={`w-6 h-6 transition-all duration-300 ${isActive ? "text-blue-400" : isClassic ? "text-purple-400" : "text-gray-400 group-hover:text-gray-200"}`} />

                <span
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 
                  bg-gray-800 text-gray-200 text-sm rounded-lg opacity-0 group-hover:opacity-100 
                  transition-opacity whitespace-nowrap"
                >
                  {item.label}
                </span>

                {isActive && (
                  <span
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 
                    rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
