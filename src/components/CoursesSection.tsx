import { Button } from "@/components/ui/button";
import violinDark from "@/assets/violin-dark.jpg";
import pianoDark from "@/assets/piano-dark.jpg";
import guitarDark from "@/assets/guitar-dark.jpg";
import vocalsDark from "@/assets/vocals-dark.jpg";
import danceDark from "@/assets/dance-dark.jpg";
import drawingDark from "@/assets/drawing-dark.jpg";

const courses = [
  {
    id: "violin-western",
    title: "Violin (Western)",
    image: violinDark,
    alt: "Violin in dramatic dark lighting",
    description:
      "Refine your technique and artistry through disciplined Western classical and contemporary violin training.",
  },
  {
    id: "violin-karnatic",
    title: "Violin (Karnatic)",
    image: violinDark,
    alt: "Violin in dramatic dark lighting",
    description:
      "Explore the rich tradition of Karnatic violin with emphasis on ragas, gamakas, and expressive ornamentation.",
  },
  {
    id: "piano",
    title: "Piano",
    image: pianoDark,
    alt: "Piano keys in dramatic dark lighting",
    description:
      "Develop mastery across classical repertoire, jazz harmony, and modern composition on the piano.",
  },
  {
    id: "guitar",
    title: "Guitar",
    image: guitarDark,
    alt: "Guitar in dramatic dark lighting",
    description:
      "From fingerstyle precision to expressive performance — build your voice on the guitar.",
  },
  {
    id: "vocals-western",
    title: "Vocals (Western)",
    image: vocalsDark,
    alt: "Vocalist singing in dramatic dark lighting",
    description:
      "Develop vocal range, breath control, and performance skills across pop, jazz, and classical Western styles.",
  },
  {
    id: "vocals-karnatic",
    title: "Vocals (Karnatic)",
    image: vocalsDark,
    alt: "Vocalist singing in dramatic dark lighting",
    description:
      "Master Karnatic vocal traditions including swaras, ragas, kritis, and the art of manodharma sangeetham.",
  },
  {
    id: "dance",
    title: "Dance",
    image: danceDark,
    alt: "Classical dancer in dramatic dark lighting",
    description:
      "Learn graceful movement, rhythm, and expression through structured dance training rooted in tradition.",
  },
  {
    id: "drawing",
    title: "Drawing",
    image: drawingDark,
    alt: "Art supplies in dramatic dark lighting",
    description:
      "Build foundational skills in sketching, shading, composition, and creative visual expression.",
  },
];

const CoursesSection = () => {
  const scrollToDetail = (id: string) => {
    const el = document.getElementById(`detail-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="courses" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Programs</p>
          <h2 className="heading-section text-foreground">Courses</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-card rounded-sm overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-110 contrast-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-light">
                  {course.description}
                </p>
                <Button
                  variant="gold-outline"
                  size="sm"
                  className="w-full"
                  onClick={() => scrollToDetail(course.id)}
                >
                  View Details
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
