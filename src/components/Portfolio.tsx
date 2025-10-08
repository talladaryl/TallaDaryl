import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);
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

  const filters = [
    { id: "all", label: "Tous" },
    { id: "web", label: "Web App" },
    { id: "mobile", label: "Mobile" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce",
      category: "ecommerce",
      image: project1,
      description: "Boutique en ligne moderne avec gestion avancée.",
      longDescription:
        "Une plateforme e-commerce complète développée avec React et Node.js, intégrant Stripe et dashboard admin.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind", "figma"],
      liveUrl: "",
      // https://fastdeal-afri-store.vercel.app/
      githubUrl: "https://github.com/talladaryl/fastdeal-afri-store.git",
    },
    {
      id: 2,
      title: "Site de personnalisation invitation",
      category: "web",
      image: project2,
      description: "App mobile avec interface intuitive et animations fluides.",
      longDescription:
        "Application cross-platform React Native, suivi d'exercices et planification personnalisée.",
      technologies: ["Reactjs", "sql", "tailwind", "figma"],
      liveUrl: "",
      // https://everblue-invitations.vercel.app/
      githubUrl: "https://github.com/talladaryl/everblue-invitations.git",
    },
    {
      id: 3,
      title: "Rohi ordonnateur",
      category: "web",
      image: project3,
      description: "Solution ERP, Rohi ordonnateur",
      longDescription:
        "application web de gestion des CTD",
      technologies: ["Codeigniter", "javaScript", "Bootstrap", "MySQL"],
      liveUrl: "",
      githubUrl: "https://github.com/example",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="section-padding bg-gradient-to-br from-muted/20 to-background overflow-hidden"
    >
      <div className="container-custom text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          Mon <span className="text-gradient">Portfolio</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Découvrez mes projets récents reflétant qualité et innovation.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-accent text-accent-foreground shadow-neon/40"
                  : "bg-muted text-muted-foreground hover:bg-accent/20 hover:text-accent"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Masonry-style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="relative group cursor-pointer observe-animation"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="card-modern rounded-3xl overflow-hidden bg-background/30 backdrop-blur-md border border-accent/20 shadow-neon hover:shadow-neon-lg hover:scale-105 transition-all duration-500">
                {/* Image + Overlay */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-accent rounded-full hover:bg-accent/80 transition"
                    >
                      <ExternalLink
                        size={18}
                        className="text-accent-foreground"
                      />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-accent rounded-full hover:bg-accent/80 transition"
                    >
                      <Github size={18} className="text-accent-foreground" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="card-modern max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-accent/20 shadow-neon p-6 bg-background/30 backdrop-blur-md relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedProject.longDescription}
              </p>

              <h4 className="text-lg font-semibold mb-2 text-foreground">
                Technologies utilisées
              </h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full border border-accent/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-neon flex items-center"
                >
                  <ExternalLink size={20} className="mr-2" /> Voir le projet
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-neon flex items-center"
                >
                  <Github size={20} className="mr-2" /> Code source
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
