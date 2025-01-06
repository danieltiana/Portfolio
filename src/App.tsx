import { useState } from "react";
import TaskBar from "./components/TaskBar";
import Window from "./components/Window";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Formations from "./components/Formations";
import Classic from "./components/Classic";

export default function App() {
  const [activeWindow, setActiveWindow] = useState("home");
  const [classicMode, setClassicMode] = useState(false);

  if (classicMode) {
    return <Classic onClose={() => setClassicMode(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Home />

      <Window title="Compétences" isOpen={activeWindow === "about"} onClose={() => setActiveWindow("home")}>
        <About />
      </Window>

      <Window title="Projects" isOpen={activeWindow === "projects"} onClose={() => setActiveWindow("home")}>
        <Projects />
      </Window>

      <Window title="Contact" isOpen={activeWindow === "contact"} onClose={() => setActiveWindow("home")}>
        <Contact />
      </Window>

      <Window title="Formations" isOpen={activeWindow === "Education"} onClose={() => setActiveWindow("home")}>
        <Formations />
      </Window>

      <TaskBar activeWindow={activeWindow} setActiveWindow={setActiveWindow} setClassicMode={setClassicMode} />
    </div>
  );
}
