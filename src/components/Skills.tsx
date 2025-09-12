import { useState } from "react";
import { ChevronDown, ChevronUp, Code2, Server, Upload, Layers } from "lucide-react";
import { FaReact, FaNodeJs, FaLaravel, FaPython, FaJava, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiDjango, SiFastapi } from "react-icons/si";

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: { icon: JSX.Element; label: string }[];
}

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("Frontend");

  const categories: SkillCategory[] = [
    {
      name: "Frontend",
      icon: <Code2 size={20} />,
      skills: [
        { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
        { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
        { icon: <FaJsSquare className="text-yellow-400" />, label: "JavaScript" },
        { icon: <SiTailwindcss className="text-cyan-400" />, label: "TailwindCSS" },
        { icon: <FaReact className="text-blue-400" />, label: "React" },
        { icon: <SiNextdotjs />, label: "Next.js" },
      ],
    },
    {
      name: "Backend",
      icon: <Server size={20} />,
      skills: [
        { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
        { icon: <FaPhp className="text-indigo-400" />, label: "PHP" },
        { icon: <FaLaravel className="text-red-500" />, label: "Laravel" },
        { icon: <SiDjango className="text-green-600" />, label: "Django" },
        { icon: <SiFastapi className="text-teal-400" />, label: "FastAPI" },
        { icon: <FaPython className="text-yellow-500" />, label: "Python" },
        { icon: <FaJava className="text-red-600" />, label: "Java" },
      ],
    },
    {
      name: "Deployment",
      icon: <Upload size={20} />,
      skills: [
        { icon: <FaDocker className="text-blue-400" />, label: "Docker" },
        { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
        { icon: <FaGitAlt className="text-orange-500" />, label: "Git" },
      ],
    },
    {
      name: "Database",
      icon: <Layers size={20} />,
      skills: [
        { icon: <SiMongodb className="text-green-500" />, label: "MongoDB" },
        { icon: <SiMysql className="text-blue-600" />, label: "MySQL" },
        { icon: <SiPostgresql className="text-sky-600" />, label: "PostgreSQL" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-black text-white">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills <span className="text-[#4ade80]">/ Stack</span>
        </h2>

        <div className="space-y-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-900/60 rounded-2xl border border-gray-700 overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() =>
                  setOpenCategory(openCategory === cat.name ? null : cat.name)
                }
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-800 transition"
              >
                <div className="flex items-center gap-3">
                  {cat.icon}
                  <span className="text-lg font-semibold">{cat.name}</span>
                </div>
                {openCategory === cat.name ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>

              {/* Content */}
              {openCategory === cat.name && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
                  {cat.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center space-y-2 bg-gray-800/50 p-4 rounded-xl hover:scale-105 transition-transform"
                    >
                      <div className="text-3xl">{skill.icon}</div>
                      <span className="text-sm">{skill.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
