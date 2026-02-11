import { Button } from "@/components/ui/button";
import heroDark from "@/assets/hero-dark.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroDark}
          alt="Grand piano in dramatic dark studio lighting"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div
          className="section-divider mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        />
        <h1
          className="heading-display text-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Unleash Your Inner{" "}
          <span className="text-primary gold-glow italic">Musician</span>
        </h1>
        <p
          className="text-xl md:text-2xl font-display font-light text-foreground/70 mb-3 tracking-wide opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          Piano &nbsp;·&nbsp; Guitar &nbsp;·&nbsp; Violin
        </p>
        <p
          className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s" }}
        >
          Offline & Online Classes
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <Button variant="gold" size="xl" asChild>
            <a href="#enroll">Enroll Now</a>
          </Button>
          <Button variant="gold-outline" size="xl" asChild>
            <a href="#courses">View Courses</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
