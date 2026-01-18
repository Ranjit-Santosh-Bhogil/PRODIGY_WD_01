import { FlaskConical, Award, Users, BadgeCheck } from "lucide-react";

const qualityFeatures = [
  {
    icon: FlaskConical,
    title: "Lab Tested",
    description: "Every batch undergoes rigorous third-party testing for purity and potency.",
  },
  {
    icon: Award,
    title: "Scientifically Formulated",
    description: "Developed by sports nutritionists using clinically-dosed ingredients.",
  },
  {
    icon: Users,
    title: "Trusted by Athletes",
    description: "Used by over 50,000 athletes, bodybuilders, and fitness enthusiasts worldwide.",
  },
  {
    icon: BadgeCheck,
    title: "Banned Substance Free",
    description: "Certified free of banned substances. Safe for competitive athletes.",
  },
];

const QualitySection = () => {
  return (
    <section id="quality" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              Quality & Trust
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              No Compromises. <span className="text-gradient">Ever.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We believe you deserve to know exactly what you're putting in your body. 
              That's why we're obsessed with quality, transparency, and results.
            </p>

            {/* Quality Features */}
            <div className="space-y-6">
              {qualityFeatures.map((feature, index) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl border border-border p-8 md:p-12">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-[64px]" />
              
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-8">
                The Action Difference
              </h3>

              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Protein Purity</span>
                    <span className="font-display font-bold text-primary">98%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                    <span className="font-display font-bold text-primary">96%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "96%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Repeat Customers</span>
                    <span className="font-display font-bold text-primary">89%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: "89%" }} />
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Certifications & Standards</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">GMP Certified</span>
                  <span className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">NSF Tested</span>
                  <span className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">Informed Sport</span>
                  <span className="px-3 py-1.5 bg-muted rounded-full text-xs font-medium">FDA Registered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
