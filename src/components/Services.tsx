import { useEffect, useRef } from "react";
import { Code, Smartphone, Globe, Database, Palette, Zap } from "lucide-react";

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: "Développement Web",
      features: ["React", "Next.js", "TypeScript"],
      description: "Apps modernes et performantes.",
    },
    {
      icon: Smartphone,
      title: "Applications Mobile",
      features: ["React Native", "Flutter"],
      description: "iOS et Android hybrides.",
    },
    {
      icon: Database,
      title: "Backend & API",
      features: ["Node.js", "MongoDB", "Laravel"],
      description: "APIs et bases robustes.",
    },
    {
      icon: Globe,
      title: "Sites E-commerce",
      features: ["Next.js", "Stripe"],
      description: "Boutiques en ligne complètes.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      features: ["Figma", "Prototyping"],
      description: "Expériences intuitives.",
    },
    {
      icon: Zap,
      title: "Optimisation",
      features: ["SEO", "Performance"],
      description: "Amélioration des performances.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative section-padding bg-gradient-to-br from-background to-background/80 overflow-hidden"
    >
      <div className="container-custom text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Mes <span className="text-gradient">Services</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Je propose une gamme complète de services de développement web pour
          transformer vos idées en solutions digitales performantes et
          innovantes.
        </p>
      </div>

      {/* Services “Floating Cards” */}
      <div className="relative flex flex-wrap justify-center gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative group w-72 h-80 p-6 rounded-3xl backdrop-blur-md bg-background/30 border border-accent/20 shadow-neon hover:shadow-neon-lg hover:scale-105 transition-all duration-500 transform-gpu observe-animation"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Icon with glow */}
            <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4 bg-gradient-to-r from-accent to-neon rounded-xl group-hover:animate-pulse transition-transform duration-300">
              <service.icon className="w-8 h-8 text-accent-foreground" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4">
              {service.description}
            </p>

            {/* Features badges */}
            <div className="flex flex-wrap justify-center gap-2">
              {service.features.map((f, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20 group-hover:bg-accent/20 transition-all"
                >
                  {f}
                </span>
              ))}
            </div>

            {/* Neon hover overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent/10 to-neon/10 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground mb-6">
          Prêt à donner vie à votre projet ?
        </p>
        <button className="btn-neon">Discutons de votre projet</button>
      </div>
    </section>
  );
};

export default Services;
