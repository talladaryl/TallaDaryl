import { useState } from "react";
import { Code, Users, Briefcase } from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaDatabase,
  FaGithub,
} from "react-icons/fa";
import {
  SiCodeigniter,
  SiNextdotjs,
  SiDjango,
  SiFastapi,
} from "react-icons/si";

interface ExperienceStep {
  year: string;
  title: string;
  description: string;
  company: string;
  icons: JSX.Element[];
}

const About = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps: ExperienceStep[] = [
    {
      year: "2022",
      title: "Développement Web",
      description:
        "Création de plusieurs projets web professionnels full-stack.",
      company: "Intelligentsia Corporation",
      icons: [
        <FaHtml5 key="html" className="w-6 h-6 text-[#4ade80]" />,
        <FaCss3Alt key="css" className="w-6 h-6 text-[#4ade80]" />,
        <FaJs key="js" className="w-6 h-6 text-[#4ade80]" />,
        <FaDatabase key="sql" className="w-6 h-6 text-[#4ade80]" />,
      ],
    },
    {
      year: "2023",
      title: "Projets Freelance",
      description:
        "Réalisation de projets clients full-stack et optimisation UX/UI.",
      company: "Freelance",
      icons: [
        <FaReact key="react" className="w-6 h-6 text-[#4ade80]" />,
        <FaLaravel key="laravel" className="w-6 h-6 text-[#4ade80]" />,
        <SiCodeigniter key="codeigniter" className="w-6 h-6 text-[#4ade80]" />,
      ],
    },
    {
      year: "2024",
      title: "Développement Web",
      description:
        "Création de plusieurs projets web professionnels full-stack.",
      company: "Shalom Technologie",
      icons: [
        <SiNextdotjs key="nextjs" className="w-6 h-6 text-[#4ade80]" />,
        <FaReact key="react" className="w-6 h-6 text-[#4ade80]" />,
        <SiDjango key="django" className="w-6 h-6 text-[#4ade80]" />,
        <FaLaravel key="laravel" className="w-6 h-6 text-[#4ade80]" />,
        <SiCodeigniter key="codeigniter" className="w-6 h-6 text-[#4ade80]" />,
        <SiFastapi key="fastapi" className="w-6 h-6 text-[#4ade80]" />,
        // <FaFirebase key="firebase" className="w-6 h-6 text-[#4ade80]" />
      ],
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
            Développeur Full Stack passionné avec plus de 2 ans d'expérience
            dans la création d'applications web et mobile modernes et
            performantes. Je me spécialise dans React, Node.js, PHP, Python et
            solutions cloud. Mon approche combine créativité technique et vision
            business pour livrer des solutions qui dépassent les attentes.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-10 text-center text-[#4ade80]">
            Mon expérience
          </h3>

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
                <Code className="w-6 h-6 text-[#4ade80]" />
              </div>
              <h4 className="text-2xl font-bold text-[#4ade80]">
                {steps[activeStep].title}
              </h4>
              <p className="text-gray-300 mb-2">
                {steps[activeStep].description}
              </p>
              <span className="text-[#4ade80] font-medium mb-2">
                {steps[activeStep].company}
              </span>

              {/* Technologie icons */}
              <div className="flex space-x-4 mt-2 flex-wrap justify-center">
                {steps[activeStep].icons.map((icon, idx) => (
                  <div
                    key={idx}
                    className="p-2 bg-gray-800 rounded-full hover:scale-110 transition-transform duration-300"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
