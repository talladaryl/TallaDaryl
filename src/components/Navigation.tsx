import { useState } from "react";
import {
  Home,
  User,
  Settings,
  Briefcase,
  MessageCircle,
  Mail,
  Sun,
  Moon,
  Globe,
  Eye,
  EyeOff,
} from "lucide-react";

const VerticalNavigation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<"FR" | "EN">("FR");
  const [visible, setVisible] = useState(true);

  const navItems = [
    { href: "#home", icon: <Home size={24} />, label: "Accueil" },
    { href: "#about", icon: <User size={24} />, label: "À propos" },
    { href: "#services", icon: <Settings size={24} />, label: "Services" },
    { href: "#portfolio", icon: <Briefcase size={24} />, label: "Portfolio" },
    {
      href: "#testimonials",
      icon: <MessageCircle size={24} />,
      label: "Témoignages",
    },
    { href: "#contact", icon: <Mail size={24} />, label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      {/* Toggle Visibility Button */}
      <button
        onClick={() => setVisible(!visible)}
        className="mb-4 p-2 rounded-full bg-[#4ade80] text-black shadow-lg hover:scale-110 transition-transform duration-300"
        title={visible ? "Masquer le menu" : "Afficher le menu"}
      >
        {visible ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>

      {visible && (
        <div
          className="flex flex-col items-center space-y-4
                        bg-black/80 backdrop-blur-lg rounded-xl p-2 shadow-lg border border-[#4ade80]"
        >
          {/* Navigation principale */}
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="relative p-3 rounded-full text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80] transition-all group"
            >
              {item.icon}
              {/* Tooltip */}
              <span
                className="absolute left-12 top-1/2 transform -translate-y-1/2 
                               bg-black/90 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                               pointer-events-none shadow-md"
              >
                {item.label}
              </span>
            </button>
          ))}

          {/* Séparateur */}
          <div className="w-10 border-t border-[#4ade80]/50 my-2"></div>

          {/* Langue */}
          <button
            onClick={toggleLanguage}
            className="relative p-3 rounded-full text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80] transition-all group"
          >
            <Globe size={20} />
            <span
              className="absolute left-12 top-1/2 transform -translate-y-1/2 
                             bg-black/90 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                             pointer-events-none shadow-md"
            >
              {language === "FR" ? "Français" : "English"}
            </span>
          </button>

          {/* Thème */}
          <button
            onClick={toggleTheme}
            className="relative p-3 rounded-full text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80] transition-all group"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            <span
              className="absolute left-12 top-1/2 transform -translate-y-1/2 
                             bg-black/90 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                             pointer-events-none shadow-md"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalNavigation;
