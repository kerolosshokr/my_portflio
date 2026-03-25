import { motion } from "framer-motion";
import { Globe, Smartphone, Database , Monitor} from "lucide-react";

const services = [
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    desc: "Building responsive and modern websites using React, TypeScript, and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: <Smartphone size={32} />,
    title: "Responsive Design",
    desc: "Creating pixel-perfect designs that work beautifully on all screen sizes.",
    tech: ["CSS Grid", "Flexbox", "Media Queries"],
  },
{
    icon: <Database size={32} />, // الأيقونة هنا بتعبر عن الـ Database
    title: "Database Design",
    desc: "Efficient schemas optimized for performance and scalability.",
    tech: ["SQL Server", "Entity Framework", "T-SQL", "LINQ"],
  },
  {
    icon: <Monitor size={32} />, // أو أي أيقونة مناسبة من Lucide زي Layout أو Browser
    title: "Web Applications",
    desc: "Building full-featured web applications using .NET ecosystem.",
    tech: ["ASP.NET MVC", "Razor Pages", "Redis", "Stripe"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background px-[4%] md:px-[9%] py-20">
      <h2 className="text-center text-[2.5rem] sm:text-[3.5rem] font-bold mb-12">
        My <span className="text-primary">Services</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            className="bg-second-bg p-8 rounded-2xl border-2 border-foreground/5 hover:-translate-y-2 hover:shadow-[0_0_25px_hsl(var(--primary))] transition-all duration-400"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <span className="text-primary mb-4 block">{s.icon}</span>
            <h3 className="text-[1.25rem] font-semibold mb-2 text-foreground">{s.title}</h3>
            <p className="text-[0.9rem] text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.75rem] px-3 py-1 rounded-full border border-primary text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
