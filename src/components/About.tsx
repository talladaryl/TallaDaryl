import { useState } from "react";
import { Code, Users, Briefcase } from "lucide-react";

interface ExperienceStep {
  year: string;
  title: string;
  description: string;
  icon: JSX.Element;
}

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ExperienceStep[] = [
    {
      year: "2021",
      title: "Premier projet web",
      description: "Création de mon premier site web professionnel en React et Node.js.",
      icon: <Code className="w-6 h-6 text-[#4ade80]" />, // vert portfolio
    },
    {
      year: "2022",
      title: "Projet Freelance",
      description: "Réalisation de plusieurs projets clients full-stack et optimisation UX/UI.",
      icon: <Users className="w-6 h-6 text-[#4ade80]" />,
    },
    {
      year: "2023",
      title: "Déploiement Cloud",
      description: "Déploiement d’applications sur AWS et intégration CI/CD.",
      icon: <Briefcase className="w-6 h-6 text-[#4ade80]" />,
    },
  ];

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom text-white">
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            À propos de <span className="text-[#4ade80]">moi</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Développeur Full Stack passionné avec plus de 2 ans d'expérience dans la création d'applications web et mobile modernes et performantes. 
            Je me spécialise dans React, Node.js, PHP, Python et solutions cloud. Mon approche combine créativité technique et vision business pour livrer des solutions qui dépassent les attentes.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-[#4ade80]">Mon expérience</h3>

          {/* Step buttons */}
          <div className="flex justify-center space-x-8 mb-12">
            {steps.map((step, index) => (
              <button
                key={step.year}
                onClick={() => setActiveStep(index)}
                className={`w-14 h-14 rounded-full flex items-center justify-center text-black font-bold text-lg transition-transform duration-300 shadow-lg ${
                  activeStep === index
                    ? "bg-[#4ade80] scale-110 shadow-2xl"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {step.year}
              </button>
            ))}
          </div>

          {/* Active Step Card */}
          <div className="max-w-xl mx-auto">
            <div className="p-8 bg-gray-900 rounded-3xl shadow-xl border border-[#4ade80] flex flex-col items-center space-y-4 text-center transition-all duration-500">
              <div className="bg-[#4ade80]/20 p-4 rounded-full mb-2">
                {steps[activeStep].icon}
              </div>
              <h4 className="text-2xl font-bold text-[#4ade80]">{steps[activeStep].title}</h4>
              <p className="text-gray-300">{steps[activeStep].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
