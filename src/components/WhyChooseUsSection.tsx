import { Award, Clock, Monitor, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Certified Instructors",
    description: "Learn from qualified, experienced music educators who are passionate about teaching.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Schedule lessons at times that work for you — mornings, evenings, or weekends.",
  },
  {
    icon: Monitor,
    title: "Online & Offline Mode",
    description: "Choose between in-person sessions at our academy or virtual lessons from anywhere.",
  },
  {
    icon: Users,
    title: "For All Age Groups",
    description: "Programs designed for kids, teens, and adults at every skill level.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="section-padding bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="brand-name text-xs text-accent mb-4 tracking-[0.4em]">WHY US</p>
          <h2 className="heading-section text-dark-surface-foreground">
            Why Choose <span className="text-accent">Notesway</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-xl border border-dark-surface-foreground/10 hover:border-primary/40 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold text-dark-surface-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-dark-surface-foreground/60 leading-relaxed">
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
