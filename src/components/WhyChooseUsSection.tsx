import { Award, Clock, Users, Mic } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Training",
    description: "Certified instructors with conservatory-level expertise and performance backgrounds.",
    bg: "bg-wash-sky",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Lessons designed around your lifestyle — mornings, evenings, or weekends.",
    bg: "bg-wash-peach",
    iconColor: "text-accent",
  },
  {
    icon: Users,
    title: "All Age Groups",
    description: "Structured programs for children, teens, and adults at every proficiency level.",
    bg: "bg-wash-mint",
    iconColor: "text-primary",
  },
  {
    icon: Mic,
    title: "Performance Opportunities",
    description: "Regular recitals, masterclasses, and stage experiences to build confidence.",
    bg: "bg-wash-lavender",
    iconColor: "text-accent",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-wash-mint">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">The Difference</p>
          <h2 className="heading-section text-foreground">Why Notesway</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 sm:p-8 rounded-2xl bg-card card-soft card-soft-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${feature.bg} mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} strokeWidth={2} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
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
