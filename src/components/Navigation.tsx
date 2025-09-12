import {
  Home,
  User,
  Settings,
  Briefcase,
  MessageCircle,
  Mail,
  Globe,
  Eye,
  EyeOff,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../components/useTheme";

const VerticalNavigation = () => {
  const { theme } = useTheme();
  const [language, setLanguage] = useState<"FR" | "EN">("FR");
  const [visible, setVisible] = useState(true);

  const navItems = [
    { href: "#home", icon: <Home size={18} />, label: "Accueil" },
    { href: "#about", icon: <User size={18} />, label: "À propos" },
    { href: "#services", icon: <Settings size={18} />, label: "Services" },
    { href: "#portfolio", icon: <Briefcase size={18} />, label: "Portfolio" },
    {
      href: "#testimonials",
      icon: <MessageCircle size={18} />,
      label: "Témoignages",
    },
    { href: "#contact", icon: <Mail size={18} />, label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "FR" ? "EN" : "FR");
  };

  return (
    <div className="fixed top-1/2 left-3 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-2">
      {/* Toggle Visibility Button */}
      <button
        onClick={() => setVisible(!visible)}
        className="mb-2 p-1.5 rounded-full bg-[#4ade80] text-black shadow-md hover:scale-110 transition-transform duration-300"
        title={visible ? "Masquer le menu" : "Afficher le menu"}
      >
        {visible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>

      {visible && (
        <div
          className={`flex flex-col items-center space-y-2 backdrop-blur-md rounded-lg p-1.5 shadow-md border border-[#4ade80] ${
            theme === "dark" ? "bg-black/70" : "bg-white/70"
          }`}
        >
          {/* Navigation principale */}
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`relative p-2 rounded-full transition-all group ${
                theme === "dark"
                  ? "text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80]"
                  : "text-black hover:bg-[#4ade80]/10 hover:text-[#4ade80]"
              }`}
            >
              {item.icon}
              {/* Tooltip */}
              <span
                className={`absolute left-10 top-1/2 transform -translate-y-1/2 text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 pointer-events-none shadow-sm ${
                  theme === "dark"
                    ? "bg-black/90 text-white"
                    : "bg-white/90 text-black"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}

          {/* Séparateur */}
          <div className="w-6 border-t border-[#4ade80]/40 my-1"></div>

          {/* Langue */}
          <button
            onClick={toggleLanguage}
            className={`relative p-2 rounded-full transition-all group ${
              theme === "dark"
                ? "text-white hover:bg-[#4ade80]/20 hover:text-[#4ade80]"
                : "text-black hover:bg-[#4ade80]/10 hover:text-[#4ade80]"
            }`}
          >
            <Globe size={16} />
            <span
              className="absolute left-10 top-1/2 transform -translate-y-1/2 
                             bg-black/90 text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 
                             pointer-events-none shadow-md"
            >
              {language === "FR" ? "Français" : "English"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VerticalNavigation;
