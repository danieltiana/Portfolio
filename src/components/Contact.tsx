import { SiWhatsapp as whatsapp } from "react-icons/si";
import { Mail, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [data, setData] = useState({ Subject: "", email: "", message: "" });
  const handleChange = (event) => {
    setData((prevData) => {
      console.log(event.target.value);
      return { ...prevData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(data.email && data.Subject && data.message){
        emailjs.send("service_qjqufnq", "template_fwyufut", data).then((response) => {
      alert("Message envoyé");
    });
 
    }else{
      alert("Veuillez remplir tous les formulaires")
    }
  };

  useEffect(() => {
    emailjs.init({
      publicKey: "K8YjG7EYwOpOvzpnx",
    });
  });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/danieltiana" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/danieltiana" },
    { icon: whatsapp, label: "Whatsapp", href: "https://wa.me/+261337163664" },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-4xl p-2 font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text mb-12">Engagez-Moi maintenant !</h2>

      <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 mb-12">
        <div className="flex items-center gap-4 mb-6">
          <Mail className="w-6 h-6 text-blue-400" />
          <a href="mailto:daniieltiana@gmail.com" className="text-lg text-gray-300 hover:text-blue-400 transition-colors">
            daniieltiana@gmail.com
          </a>
        </div>

        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <Icon className="w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                <span className="sr-only">{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <form className="space-y-6" action="" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Sujet
          </label>
          <input
            type="text"
            id="sujet"
            className="w-full px-4 py-3 bg-gray-900/50 text-gray-200 rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
            placeholder="Sujet"
            value={data.Subject}
            name="Subject"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-gray-900/50 text-gray-200 rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
            placeholder="voteemail@example.com"
            value={data.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-900/50 text-gray-200 rounded-xl border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
            placeholder="Votre message..."
            value={data.message}
            name="message"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="group relative w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium transition-all">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity" />
          <span className="relative">Send Message</span>
        </button>
      </form>
    </div>
  );
}
