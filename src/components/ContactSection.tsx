import { useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (formRef.current) {
      emailjs
        .sendForm(serviceID, templateID, formRef.current, publicKey)
        .then(() => {
          alert("Message sent successfully ✅");
          formRef.current?.reset();
        })
        .catch(() => {
          alert("Error sending message ❌");
        });
    }
  };

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
        {/* Info Side - التنسيق الجمالي من الصفحة الأولى */}
        <div className="flex-1 bg-gradient-to-br from-primary to-[#7e22ce] p-10 flex flex-col gap-8 text-foreground">
          <div>
            <h3 className="text-[1.8rem] font-bold mb-2 text-white">Get in Touch</h3>
            <p className="text-[0.95rem] opacity-80 leading-relaxed text-white">
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
              className="flex items-center gap-4 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 hover:translate-x-1 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 text-[1rem] text-white"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Form Side - الوظيفة البرمجية من الصفحة الثانية */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex-[1.5] bg-background p-10 flex flex-col gap-4"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 bg-second-bg border border-foreground/10 rounded-xl text-foreground text-[1rem] outline-none resize-none focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary))] transition-all"
          />
          <button
            type="submit"
            className="mt-2 py-3 bg-primary text-primary-foreground rounded-full text-base font-semibold border-2 border-primary hover:bg-transparent hover:text-primary hover:shadow-[0_0_25px_hsl(var(--primary))] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;