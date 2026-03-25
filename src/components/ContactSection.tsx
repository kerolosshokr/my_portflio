import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="bg-second-bg px-[4%] md:px-[9%] py-20">
      <h2 className="text-center text-[2.5rem] sm:text-[3.5rem] font-bold mb-2 italic text-primary">
        Contact Me
      </h2>
      <div className="w-14 h-1 bg-primary mx-auto rounded mb-12" />

      <motion.div
        className="max-w-[1000px] mx-auto flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-foreground/5 hover:shadow-[0_0_25px_hsl(var(--primary))] hover:-translate-y-1 hover:border-primary transition-all duration-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Info Side */}
        <div className="flex-1 bg-gradient-to-br from-primary to-[#7e22ce] p-10 flex flex-col gap-8 text-foreground">
          <div>
            <h3 className="text-[1.8rem] font-bold mb-2">Get in Touch</h3>
            <p className="text-[0.95rem] opacity-80 leading-relaxed">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
          </div>
          {[
            { icon: <Mail size={22} />, text: "Kerolos.shokr@gmail.com" },
            { icon: <Phone size={22} />, text: "+20 121110497" },
            { icon: <MapPin size={22} />, text: "Cairo, Egypt" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 hover:translate-x-1 hover:shadow-[0_0_15px_hsl(var(--primary))] transition-all duration-300 text-[1rem]"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Form Side */}
        <div className="flex-[1.5] bg-background p-10 flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none resize-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <button className="mt-2 py-3 bg-primary text-primary-foreground rounded-full text-base font-semibold border-2 border-primary hover:bg-transparent hover:text-primary hover:shadow-[0_0_25px_hsl(var(--primary))] transition-all duration-300">
            Send Message
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;




      