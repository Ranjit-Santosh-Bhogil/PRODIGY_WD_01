import { Zap, Shield, Rocket, Leaf } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "High Protein",
    description: "30g of premium whey protein per serving for maximum muscle growth and recovery.",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "No artificial fillers, colors, or sweeteners. Just pure, effective nutrition.",
  },
  {
    icon: Rocket,
    title: "Fast Absorption",
    description: "Engineered for rapid digestion so your muscles get fuel when they need it most.",
  },
  {
    icon: Shield,
    title: "Lab Tested",
    description: "Every batch is third-party tested for purity, potency, and banned substances.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 md:py-32 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Why Choose Action
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Built for <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every product is formulated with one goal in mind: helping you perform at your absolute best.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-xl bg-primary/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
