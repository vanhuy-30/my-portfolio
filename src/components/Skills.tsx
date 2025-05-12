"use client";
import { motion } from "framer-motion";
import { Code, Database, Server, Settings, Palette, Cloud } from "lucide-react"; // Thêm icons nếu cần

interface Skill {
  name: string;
  level?: number; // 0-100, optional for progress bar
  icon?: React.ReactNode; // Optional icon
  category: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: <Code size={20} />, category: "Frontend" },
  { name: "CSS3 & SCSS", level: 90, icon: <Palette size={20} />, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 90, icon: <Code size={20} />, category: "Frontend" },
  { name: "TypeScript", level: 85, icon: <Code size={20} />, category: "Frontend" },
  { name: "React.js", level: 90, icon: <Code size={20} />, category: "Frontend" },
  { name: "Next.js", level: 85, icon: <Code size={20} />, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, icon: <Palette size={20} />, category: "Frontend" },
  { name: "Vue.js", level: 75, icon: <Code size={20} />, category: "Frontend" }, // Ví dụ
  // Backend
  { name: "Node.js", level: 80, icon: <Server size={20} />, category: "Backend" },
  { name: "Express.js", level: 80, icon: <Server size={20} />, category: "Backend" },
  { name: "Python (Django/Flask)", level: 70, icon: <Code size={20} />, category: "Backend" }, // Ví dụ
  // Databases
  { name: "MongoDB", level: 75, icon: <Database size={20} />, category: "Databases" },
  { name: "PostgreSQL", level: 70, icon: <Database size={20} />, category: "Databases" },
  { name: "Firebase", level: 80, icon: <Cloud size={20} />, category: "Databases" },
  // Tools & Others
  { name: "Git & GitHub", level: 90, icon: <Settings size={20} />, category: "Tools" },
  { name: "Docker", level: 65, icon: <Server size={20} />, category: "Tools" },
  { name: "Figma", level: 70, icon: <Palette size={20} />, category: "Tools" },
  { name: "REST APIs", level: 85, icon: <Server size={20} />, category: "Others" },
  { name: "GraphQL", level: 70, icon: <Server size={20} />, category: "Others" },
];

const skillCategories = ["Frontend", "Backend", "Databases", "Tools", "Others"];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-4">
            Kỹ Năng <span className="text-primary">Chuyên Môn</span>
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
            Các công nghệ và công cụ mà tôi thành thạo và có kinh nghiệm làm việc.
          </p>
        </motion.div>

        {skillCategories.map((category, catIndex) => {
          const categorySkills = skillsData.filter(skill => skill.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-semibold text-text mb-6 text-center md:text-left">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-card p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
                  >
                    <div className="mb-3 text-primary">{skill.icon || <Code size={28} />}</div>
                    <h4 className="text-lg font-medium text-text mb-2">{skill.name}</h4>
                    {skill.level && (
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
