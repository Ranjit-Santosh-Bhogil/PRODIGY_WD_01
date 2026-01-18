import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, RefreshCw } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Limited Time Offer
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Ready to <span className="text-gradient glow-text">Take Action?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get 20% off your first order + free shipping on orders over $75. 
            Use code <span className="text-primary font-bold">GAINS20</span> at checkout.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Shop Now & Save 20%
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">Free Shipping $75+</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <RefreshCw className="h-5 w-5 text-primary" />
              <span className="text-sm">Easy Returns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
