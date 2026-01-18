import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Professional Bodybuilder",
    content: "Action Whey is the cleanest protein I've ever used. No bloating, no aftertaste, just results. My recovery has never been better.",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Sarah Chen",
    role: "CrossFit Athlete",
    content: "The Pre-Workout is insane. Smooth energy that lasts my entire WOD without the crash. This is my go-to now.",
    rating: 5,
    avatar: "SC",
  },
  {
    name: "David Rodriguez",
    role: "Personal Trainer",
    content: "I recommend Action to all my clients. The quality is unmatched, and you can actually see and feel the difference in performance.",
    rating: 5,
    avatar: "DR",
  },
];

const results = [
  { metric: "+15 lbs", label: "Avg. Muscle Gain", period: "12 weeks" },
  { metric: "-8%", label: "Avg. Body Fat Loss", period: "8 weeks" },
  { metric: "+40%", label: "Strength Increase", period: "6 weeks" },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">
            Real Results
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Athletes <span className="text-gradient">Trust</span> Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of athletes who've transformed their performance with Action supplements.
          </p>
        </div>

        {/* Results Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {results.map((result, index) => (
            <div
              key={result.label}
              className="text-center p-8 rounded-xl bg-card border border-border"
            >
              <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-2">
                {result.metric}
              </div>
              <div className="text-lg font-medium mb-1">{result.label}</div>
              <div className="text-sm text-muted-foreground">in {result.period}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-6 rounded-xl bg-card border border-border"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="font-display font-bold text-primary">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
