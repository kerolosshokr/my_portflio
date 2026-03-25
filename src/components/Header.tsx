import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full px-[9%] py-8 flex justify-between items-center z-[100] transition-all duration-300 ${
        sticky ? "bg-background shadow-lg" : "bg-transparent"
      }`}
    >
      <a href="#home" className="text-[2.5rem] font-semibold text-foreground">
        Shokr<span className="text-primary">.</span>
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setActive(l.href)}
            className={`text-[1.1rem] font-medium transition-colors hover:text-primary ${
              active === l.href ? "text-primary" : "text-foreground"
            }`}
          >
            {l.label}
          </a>
        ))}
      </nav>

      {/* Mobile Toggle */}
      <button
        className="md:hidden text-foreground z-[110]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-background shadow-lg py-6 px-[4%] flex flex-col gap-6 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => {
                setActive(l.href);
                setMenuOpen(false);
              }}
              className={`text-[1.2rem] font-medium transition-colors hover:text-primary ${
                active === l.href ? "text-primary" : "text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
