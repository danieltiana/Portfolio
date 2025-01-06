export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-7rem)] p-8 bg-gray-950" style={{ height: "100Vh" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-purple-950/30 to-gray-950" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-center gap-20 h-full">
        <div className="flex flex-col gap-8 max-w-xl">
          <div className="space-y-2">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text [text-shadow:0_0_30px_rgba(59,130,246,0.2)]">Daniel Tiana</h2>
            <p className="text-3xl font-light text-gray-400 tracking-wide">Developpeur / Designer</p>
          </div>

          <p className="text-md text-gray-400/80 leading-relaxed">
            Créer des expériences digitales avec des technologies de web moderne.Passioné de la création des applications fonctionnesls et design moderne
          </p>

          {/* <div className="flex gap-6">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-white font-medium">Voir les projets</span>
            </button>
            <button className="group px-8 py-4 rounded-2xl relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl" />
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-purple-600/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative text-gray-300 font-medium group-hover:text-white transition-colors">Contacter</span>
            </button>
          </div> */}
        </div>

        <div data-aos="fade-up" className="relative group md:-top-0" style={{ marginTop: "-50px" }}>
          <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem]  sm:h-[100] rounded-3xl border-2 border-blue-500 overflow-hidden transition-transform duration-500 group-hover:scale-90">
            <img src="copy.png" alt="Profile" className="w-full object-cover" />
            <div className="absolute" />
          </div>

          <div className="absolute -inset-4  animate-glow bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-5 blur-2xl group-hover:opacity-10 transition-opacity" />

          <div className="absolute -top-8 -right-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse delay-700" />
        </div>
      </div>
    </div>
  );
}
