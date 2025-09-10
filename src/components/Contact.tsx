import { useState, useEffect, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fade-in-up");
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".observe-animation");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 2000));
    alert("Message envoyé ! Merci pour votre contact.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "talladarylarsen85@gmail.com",
      link: "mailto:talladarylarsen85@gmail.com",
    },
    {
      icon: Phone,
      title: "Téléphone",
      value: "+237 658 940 985",
      link: "tel:+237658940985",
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Yaounde, Cameroun",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, url: "https://www.github.com/talladaryl", label: "Github" },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/daryl-talla",
      label: "LinkedIn",
    },
    { icon: Twitter, url: "https://twitter.com/DarylT.A.D", label: "Twitter" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container-custom text-foreground">
        {/* Header */}
        <div className="text-center mb-16 observe-animation">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gradient">
            Contactez-moi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet ou une idée à partager ? Remplissez le
            formulaire ou utilisez les informations ci-dessous pour me
            contacter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="observe-animation">
            <div className="bg-background/20 backdrop-blur-md rounded-3xl p-10 shadow-neon border border-accent/20">
              <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nom complet"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-modern"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-modern"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Sujet"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-modern w-full"
                />
                <textarea
                  name="message"
                  placeholder="Votre message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="input-modern w-full resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-neon w-full flex justify-center items-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    "Envoi..."
                  ) : (
                    <Send className="mr-2" size={20} />
                  )}
                  {isSubmitting ? null : "Envoyer"}
                </button>
              </form>
            </div>
          </div>

          {/* Infos contact & réseaux */}
          <div className="observe-animation space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <a
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 rounded-2xl bg-background/20 backdrop-blur-md border border-accent/20 shadow-neon hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-tr from-accent to-neon mr-4">
                    <info.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-semibold mb-4">Réseaux sociaux</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-12 h-12 flex items-center justify-center bg-muted hover:bg-accent rounded-xl transition-all duration-300 hover:scale-110 hover:text-accent-foreground"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-background/20 backdrop-blur-md rounded-xl p-6 shadow-neon border border-accent/20 flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-2">Disponibilité</h4>
                <p className="text-muted-foreground text-sm">
                  Disponible pour de nouveaux projets. Réponse sous 24h.
                </p>
              </div>
              <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .input-modern {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          transition: all 0.3s ease;
        }
        .input-modern:focus {
          outline: none;
          border-color: #00f0ff;
          box-shadow: 0 0 10px #00f0ff50;
          backdrop-filter: blur(6px);
        }
      `}</style>
    </section>
  );
};

export default Contact;
