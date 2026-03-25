import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 65 },
  { name: "C#", level: 75 },
];

const backendSkills = [
  { name: "Front-End", level: 95 },
  { name: "Back-End", level: 80 },
  { name: "Database / SQL", level: 65 },
  { name: "API Design", level: 65 },
];

const SkillColumn = ({ title, skills }: { title: string; skills: typeof frontendSkills }) => (
  <div className="flex-1 min-w-[280px]">
    <h3 className="text-[1.5rem] font-semibold mb-4 text-foreground">{title}</h3>
    <div className="border-2 border-primary rounded-lg p-4 hover:bg-background transition-all duration-500">
      {skills.map((s, i) => (
        <div key={i} className="py-3">
          <div className="flex justify-between text-[1.05rem] font-medium text-foreground mb-1">
            <span>{s.name}</span>
            <span>{s.level}%</span>
          </div>
          <div className="skill-bar">
            <motion.span
              className="skill-bar-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${s.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-second-bg px-[4%] md:px-[9%] py-20">
      <h2 className="text-center text-[2.5rem] sm:text-[3.5rem] font-bold mb-12">
        My <span className="text-primary">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-10 lg:gap-16">
        <SkillColumn title="Coding Skills" skills={frontendSkills} />
        <SkillColumn title="Professional Skills" skills={backendSkills} />
      </div>
    </section>
  );
};

export default SkillsSection;
