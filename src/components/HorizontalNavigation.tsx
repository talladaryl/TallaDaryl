import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const HorizontalNavigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg flex items-center justify-between px-8 py-4">
      {/* Initiales TD stylisées */}
      <div className="flex items-center">
        <span className="text-3xl font-extrabold bg-gradient-to-r from-[#4ade80] via-[#60a5fa] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-lg select-none">
          TD
        </span>
      </div>
      {/* Liens à droite */}
      <div className="flex items-center space-x-6">
        {/* Gmail */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=talladarylarsen85@gmail.com&su=&body="
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
          title="Envoyer un mail"
        >
          <FaGoogle className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
          <span className="hidden sm:inline text-sm font-medium text-white group-hover:text-[#4ade80] transition-colors"></span>
        </a>
        {/* Github */}
        <a
          href="https://github.com/talladaryl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          title="Github"
        >
          <FaGithub className="w-6 h-6 text-white hover:text-[#4ade80] transition-colors" />
        </a>
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/talladaryl"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
          title="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-[#0e76a8] hover:text-[#4ade80] transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default HorizontalNavigation;
