import { Button } from "@/components/ui/button";
import violinImg from "@/assets/violin-card.jpg";
import pianoImg from "@/assets/piano-card.jpg";
import guitarImg from "@/assets/guitar-card.jpg";

const courses = [
  {
    title: "Violin",
    image: violinImg,
    alt: "Violin on wooden surface",
    description:
      "Master the art of the violin with structured lessons that build technique, tone, and musicality from the ground up.",
  },
  {
    title: "Piano",
    image: pianoImg,
    alt: "Grand piano in elegant room",
    description:
      "From classical to contemporary, develop your piano skills with hands-on guidance tailored to your pace and goals.",
  },
  {
    title: "Guitar",
    image: guitarImg,
    alt: "Acoustic guitar leaning against wall",
    description:
      "Learn chords, strumming, fingerpicking and more — whether you dream of acoustic melodies or electric riffs.",
  },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="brand-name text-xs text-primary mb-4 tracking-[0.4em]">OUR PROGRAMS</p>
          <h2 className="heading-section text-foreground">
            Courses We <span className="text-accent">Offer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="group bg-background rounded-xl overflow-hidden border border-border hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-body text-sm mb-5">{course.description}</p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
