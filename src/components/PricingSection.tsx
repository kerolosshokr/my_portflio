import { motion } from "framer-motion";
import { Zap, Star, Crown, Check, X } from "lucide-react";

const plans = [
  {
    icon: <Zap size={36} />,
    name: "Starter",
    price: "$99",
    period: "/project",
    desc: "Perfect for small landing pages and simple websites.",
    features: [
      { text: "Single Page Design", included: true },
      { text: "Responsive Layout", included: true },
      { text: "Basic SEO", included: true },
      { text: "CMS Integration", included: false },
      { text: "Priority Support", included: false },
    ],
    popular: false,
  },
  {
    icon: <Star size={36} />,
    name: "Professional",
    price: "$299",
    period: "/project",
    desc: "For businesses that need a complete web solution.",
    features: [
      { text: "Multi-Page Website", included: true },
      { text: "Responsive Layout", included: true },
      { text: "Advanced SEO", included: true },
      { text: "CMS Integration", included: true },
      { text: "Priority Support", included: false },
    ],
    popular: true,
  },
  {
    icon: <Crown size={36} />,
    name: "Enterprise",
    price: "$599",
    period: "/project",
    desc: "Full-scale applications with custom features.",
    features: [
      { text: "Custom Web App", included: true },
      { text: "Responsive Layout", included: true },
      { text: "Advanced SEO", included: true },
      { text: "CMS Integration", included: true },
      { text: "Priority Support", included: true },
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background px-[4%] md:px-[9%] py-20">
      <h2 className="text-center text-[2.5rem] sm:text-[3.5rem] font-bold mb-12">
        My <span className="text-primary">Pricing</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-[1100px] mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className={`flex-1 min-w-[280px] max-w-[360px] mx-auto md:mx-0 rounded-2xl p-8 flex flex-col text-center border-2 transition-all duration-400 ${
              plan.popular
                ? "bg-background border-primary shadow-[0_0_30px_hsl(var(--primary)/0.4)] scale-[1.02] md:scale-105"
                : "bg-second-bg border-foreground/5 hover:-translate-y-2 hover:shadow-[0_0_25px_hsl(var(--primary))] hover:border-primary"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            {plan.popular && (
              <span className="inline-block mx-auto px-4 py-1 bg-primary/10 text-primary rounded-full text-[0.75rem] font-semibold tracking-wider mb-4">
                MOST POPULAR
              </span>
            )}
            <span className="text-primary mb-4 flex justify-center">{plan.icon}</span>
            <h3 className="text-[1.5rem] font-bold mb-2 text-foreground">{plan.name}</h3>
            <div className="text-[2.2rem] font-extrabold text-primary mb-2">
              {plan.price}
              <span className="text-[0.9rem] text-muted-foreground font-normal">{plan.period}</span>
            </div>
            <p className="text-[0.9rem] text-muted-foreground mb-6 min-h-[3rem]">{plan.desc}</p>

            <ul className="text-left space-y-3 mb-8 flex-grow">
              {plan.features.map((f, j) => (
                <li
                  key={j}
                  className={`flex items-center gap-3 text-[0.95rem] ${
                    f.included ? "text-foreground" : "text-muted-foreground/50 line-through"
                  }`}
                >
                  {f.included ? (
                    <Check size={16} className="text-primary flex-shrink-0" />
                  ) : (
                    <X size={16} className="text-muted-foreground/50 flex-shrink-0" />
                  )}
                  {f.text}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`inline-flex justify-center items-center py-3 rounded-full text-base font-bold tracking-wide border-2 border-primary transition-all duration-400 ${
                plan.popular
                  ? "bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_hsl(var(--primary))]"
                  : "bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:shadow-[0_0_25px_hsl(var(--primary))]"
              }`}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
