import {
  Download,
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Phone,
  
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import heroBackground from "@/assets/hero-background.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const circles = [
    {
      className: "top-20 left-20 w-72 h-72 bg-accent/10 blur-3xl",
      delay: "0s",
    },
    {
      className: "bottom-20 right-20 w-96 h-96 bg-neon/10 blur-3xl",
      delay: "2s",
    },
    {
      className: "top-1/2 left-1/3 w-48 h-48 bg-accent/20 blur-2xl",
      delay: "4s",
    },
  ];

  const socials = [
    { icon: <Phone size={28} />, link: "https://wa.me/237 658 840 985" }, // WhatsApp
    { icon: <Facebook size={28} />, link: "https://facebook.com/" },
    { icon: <Twitter size={28} />, link: "https://x.com/" },
    { icon: <Github size={28} />, link: "https://github.com/" },
    { icon: <Linkedin size={28} />, link: "https://linkedin.com/in/" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(22,25,35,0.85), rgba(22,25,35,0.85)), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        {circles.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${c.className}`}
            style={{ animationDelay: c.delay }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        {/* Photo */}
        <div className="flex justify-center mb-6">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent shadow-lg relative z-10">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Texte principal */}
        <h4 className="text-xl md:text-2xl font-light text-foreground mb-2">
          salut, je suis
        </h4>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient animate-glow">
            <Typewriter
              words={["</TALLA Daryl>", "Full, developpeur"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
          Passionné par la création d'expériences web modernes et innovantes.
          Spécialisé en React, Node.js et design UI/UX.
        </p>

        {/* Bouton CV */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-6">
          <a
            href="CV1.pdf"
            download="Mon_CV.pdf"
            className="btn-outline-neon group flex items-center"
            aria-label="Télécharger mon CV"
          >
            <Download
              className="mr-2 group-hover:scale-110 transition-transform duration-300"
              size={20}
            />
            Télécharger CV
          </a>
        </div>

        {/* Icônes sociales en ligne */}
        <div className="flex justify-center gap-6">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background shadow-md border border-accent 
                         hover:scale-125 hover:text-accent hover:shadow-accent transition-transform duration-300"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
