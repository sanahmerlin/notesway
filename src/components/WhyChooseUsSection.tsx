import { Award, Clock, Users, Mic } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Training",
    description: "Certified instructors with conservatory-level expertise and performance backgrounds.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Lessons designed around your lifestyle — mornings, evenings, or weekends.",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description: "Structured programs for children, teens, and adults at every proficiency level.",
  },
  {
    icon: Mic,
    title: "Performance Opportunities",
    description: "Regular recitals, masterclasses, and stage experiences to build confidence.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">The Difference</p>
          <h2 className="heading-section text-foreground">Why Notesway</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-8 rounded-sm border border-border/30 hover:border-primary/20 bg-card/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 mb-6">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
