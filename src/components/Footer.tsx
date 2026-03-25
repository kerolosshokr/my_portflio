import { Code2, ExternalLink, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background px-[4%] md:px-[9%] pt-16 pb-8 border-t border-foreground/5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-[1.8rem] font-bold mb-4 text-foreground">
            Portfolio<span className="text-primary">.</span>
          </h3>
          <p className="text-[0.9rem] text-muted-foreground leading-relaxed mb-4">
            Building modern web experiences with passion and precision.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Code2 size={18} />, href: "#" },
              { icon: <ExternalLink size={18} />, href: "#" },
              { icon: <Mail size={18} />, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-9 h-9 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-[1.3rem] font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[3px] after:bg-primary">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {["Home", "About", "Skills", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-[0.95rem] text-muted-foreground hover:text-primary hover:pl-2 transition-all duration-300"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[1.3rem] font-bold mb-6 text-foreground relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[3px] after:bg-primary">
            Contact Info
          </h3>
          <ul className="space-y-3 text-[0.95rem] text-muted-foreground">
            <li>📧 Kerolos.shokr@gmail.com</li>
            <li>📱+20 1211104197</li>
            <li>📍 Cairo, Egypt</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-foreground/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[0.85rem] text-muted-foreground">
          © 2026 kerolos shokr. All rights reserved.
        </p>
        <a
          href="#home"
          className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center hover:bg-background hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary))] hover:scale-110 transition-all duration-300"
        >
          <ArrowUp size={22} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
