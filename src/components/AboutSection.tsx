import { motion } from "framer-motion";
import { Code2, Layers, Palette, Rocket } from "lucide-react";
import cvFile from "@/assets/Kerolos_Shokr 2.pdf";


const highlights = [
  { icon: <Code2 size={24} />, text: "Backend: ASP.NET Core, Web API, SQL Server & Clean Architecture." },
  { icon: <Layers size={24} />, text: "Expert in React, TypeScript & Modern CSS" },
  { icon: <Palette size={24} />, text: "UI/UX Design with Figma & Adobe XD" },
  { icon: <Rocket size={24} />, text: "Performance Optimization & Best Practices" },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center bg-second-bg px-[4%] md:px-[9%] py-20"
    >
      <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
        {/* Code Icon */}
        <motion.div
          className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[280px] lg:h-[280px] border-[3px] border-primary rounded-[30px] flex items-center justify-center cursor-pointer hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] hover:-translate-y-3 transition-all duration-400 flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[50px] sm:text-[60px] lg:text-[80px] text-primary">
            {"</>"}
          </span>
        </motion.div>

        {/* Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[2.2rem] sm:text-[3rem] lg:text-[4rem] font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <h3 className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2.2rem] font-semibold text-foreground mb-4">
          Full Stack .NET Developer
          </h3>
          <p className="text-[0.95rem] sm:text-[1rem] lg:text-[1.05rem] text-muted-foreground leading-relaxed mb-6">
            I'm Passionate developer with over <span className="text-primary font-semibold"> 4+ years</span>  of learning and hands-on practice in building secure, scalable, and high-performance web applications using modern Microsoft technologies.
            <span className="text-primary font-semibold">TypeScript</span>, and{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>.
          </p>

          {/* Highlights */}
          <div className="space-y-3 mb-8">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="exp-item flex items-center gap-4 p-4 rounded-xl border-l-4 border-primary bg-primary/10 hover:bg-primary/20 hover:translate-x-2 transition-all duration-300"
              >
                <span className="text-primary flex-shrink-0">{item.icon}</span>
                <span className="text-[0.9rem] sm:text-[0.95rem] text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

<div className="flex gap-4 mt-4">
  {/* Download CV */}
<a
  href={cvFile}
  download
  className="inline-flex justify-center items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
>
  Download CV
</a>

  {/* Open CV */}
 <a
  href={cvFile}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex justify-center items-center px-6 py-3 bg-transparent text-primary rounded-lg text-base font-semibold border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
>
  Open CV
</a>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
