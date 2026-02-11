import { Button } from "@/components/ui/button";
import heroPiano from "@/assets/hero-piano.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPiano}
          alt="Person playing piano in elegant room with natural light"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 via-dark-surface/60 to-dark-surface/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="brand-name text-sm md:text-base text-dark-surface-foreground/70 mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          NOTESWAY
        </p>
        <h1
          className="heading-display text-dark-surface-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Unleash Your Inner{" "}
          <span className="text-accent">Musician</span>
        </h1>
        <p
          className="text-xl md:text-2xl font-light text-dark-surface-foreground/80 mb-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Piano &nbsp;|&nbsp; Guitar &nbsp;|&nbsp; Violin Lessons
        </p>
        <p
          className="text-sm text-dark-surface-foreground/60 mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Offline & Online Classes Available
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <Button variant="hero" size="xl" asChild>
            <a href="#enroll">Enroll Now</a>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="#courses">Explore Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
