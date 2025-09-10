import { ArrowUp, Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { href: "#home", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com/talladaryl", label: "Github" },
    {
      icon: Linkedin,
      url: "https://linkedin.com/in/daryl-talla",
      label: "LinkedIn",
    },
    { icon: Twitter, url: "https://twitter.com/DarylT.A.D", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-background/50 backdrop-blur-md border-t border-border/30 py-12">
      <div className="container-custom flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        {/* Brand & copyright */}
        <div className="flex flex-col items-center lg:items-start space-y-2">
          <span className="text-2xl font-bold text-gradient">Portfolio</span>
          <p className="text-sm text-muted-foreground text-center lg:text-left">
            © 2024 TALLA Daryl. Créé avec
        
          </p>
        </div>

        {/* Quick links */}
        <div className="flex space-x-6">
          {quickLinks.map((link) => (
            <button
              key={link.href}
              onClick={() =>
                document
                  .querySelector(link.href)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social, i) => {
            const Icon = social.icon;
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-background/20 backdrop-blur-md rounded-full border border-accent/20 hover:bg-accent/20 hover:scale-110 transition-transform duration-300"
                title={social.label}
              >
                <Icon size={18} className="text-accent" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent/80 text-accent-foreground rounded-full shadow-neon hover:scale-110 flex items-center justify-center transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5 animate-bounce" />
      </button>
    </footer>
  );
};

export default Footer;
