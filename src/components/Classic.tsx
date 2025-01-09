import { BsGridFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsFillBriefcaseFill, BsMortarboardFill, BsPersonVcardFill } from "react-icons/bs";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import { IoMdMail } from "react-icons/io";
import Formations from "./Formations";
import Aos from "aos";
import { useEffect } from "react";

interface ClassicModeProps {
  onClose: () => void;
}

export default function Classic({ onClose }: ClassicModeProps) {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  });

  return (
    <div className="fixed inset-0 bg-gray-950 text-gray-200 overflow-auto">
      <nav className="sticky top-0 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-20">
            <div className="flex items-center gap-12">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">Daniel Tiana</div>
              <div className="flex gap-8">
                {[
                  {
                    href: "#home",
                    label: (
                      <>
                        <AiFillHome />
                        <span className="hidden md:block"> Accueil</span>
                      </>
                    ),
                  },
                  {
                    href: "#formations",
                    label: (
                      <>
                        <BsMortarboardFill />
                        <span className="hidden md:block"> Formations</span>
                      </>
                    ),
                  },
                  {
                    href: "#about",
                    label: (
                      <>
                        <BsPersonVcardFill />
                        <span className="hidden md:block"> A propos</span>
                      </>
                    ),
                  },
                  {
                    href: "#projects",
                    label: (
                      <>
                        <BsFillBriefcaseFill />
                        <span className="hidden md:block"> Projets</span>
                      </>
                    ),
                  },
                  {
                    href: "#contact",
                    label: (
                      <>
                        <IoMdMail />
                        <span className="hidden md:block"> Contacter</span>
                      </>
                    ),
                  },
                ].map((link) => (
                  <a key={link.href} href={link.href} className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors relative group">
                    <span className="text-sm font-medium tracking-wide">{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            <button onClick={onClose} className="group flex items-center  rounded-xl  hover:from-blue-500/20 hover:to-purple-500/20 transition-all">
              <span>
                <BsGridFill />
              </span>{" "}
              &nbsp;
              <span className="hidden md:block text-sm font-medium text-gray-300 group-hover:text-white">Vue unique</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="space-y-32">
        <section id="home" className="relative">
          <Home />
        </section>
        <section id="about" className="relative max-w-7xl mx-auto px-4">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
          </div>
          <About />
        </section>
        <section id="formations" className="relative max-w-7xl mx-auto px-4">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
          </div>
          <Formations />
        </section>
        <section id="projects" className="relative max-w-7xl mx-auto px-4">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          </div>
          <Projects />
        </section>
        <section id="contact" className="relative max-w-7xl mx-auto px-4 pb-32">
          <div className="">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
          </div>
          <Contact />
        </section>
      </div>
    </div>
  );
}
