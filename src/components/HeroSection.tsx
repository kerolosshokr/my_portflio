import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImg from "@/assets/photo2.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-[4%] md:px-[9%] pt-32 pb-10 gap-10"
    >
      {/* Content */}
      <motion.div
        className="max-w-[60rem] z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
       <h1 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold leading-tight text-foreground">
  Hi, I'm <span className="text-primary">Kerolos Shokr</span>
</h1>

        <div className="text-animate relative w-fit mx-auto md:mx-0 mt-2">
          <h3 className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] relative">
            SoftWare Enginner
          </h3>
        </div>

      <p className="max-w-[600px] text-[0.95rem] sm:text-[1.05rem] md:text-[1.15rem] mt-6 mb-8 text-muted-foreground/90 leading-relaxed">
  Full Stack .NET Developer specializing in building secure, scalable, 
  and high-performance web applications using modern technologies and 
  clean architecture principles.
</p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold tracking-wide border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-500"
          >
            Hire Me
          </a>
          <a
            href="#about"
            className="inline-flex justify-center items-center px-8 py-3 bg-transparent text-primary rounded-lg text-base font-semibold tracking-wide border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            Let's Talk
          </a>
        </div>

        {/* Social Icons */}
<div className="flex gap-4 mt-8 justify-center md:justify-start">
  {[
    { icon: <FaFacebookF size={22} />, href: "https://www.facebook.com/Kerolos.shokr/" },
    { icon: <FaGithub size={22} />, href: "https://github.com/kerolosshokr" },
    { icon: <FaLinkedinIn size={22} />, href: "https://www.linkedin.com/in/kerolos-shokr-0977782b3/" },
  ].map((s, i) => (
    <a
      key={i}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center p-3 rounded-full border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white shadow-[0_0_15px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_hsl(var(--primary))] hover:-translate-y-1.5 transition-all duration-300"
    >
      {s.icon}
    </a>
  ))}
</div>

      </motion.div>

      {/* Profile Image */}
      <motion.div
        className="w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] flex-shrink-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <img
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover object-[center_20%] rounded-full border-4 border-primary shadow-[0_0_25px_hsl(var(--primary))] hover:shadow-[0_0_50px_hsl(var(--primary))] hover:scale-105 transition-all duration-500"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
