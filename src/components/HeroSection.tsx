import { Button } from "@/components/ui/button";
import heroDark from "@/assets/hero-dark.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-wash-sky pt-24 pb-12 sm:pt-28 md:pt-0 md:pb-0">
      <div className="absolute inset-0">
        <img
          src={heroDark}
          alt="Happy child playing piano in bright cheerful room"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center w-full">
        <p
          className="brand-name text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-primary">NOTES</span><span className="text-accent">WAY</span>
        </p>
        <div
          className="section-divider mb-6 sm:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s" }}
        />
        <h1
          className="heading-display text-foreground mb-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          Unleash Your Inner{" "}
          <span className="text-primary">Musician</span>
        </h1>
        <p
          className="font-display text-base sm:text-lg md:text-xl font-medium text-accent mb-3 tracking-wide opacity-0 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          Your Way to Musical Discovery
        </p>
        <p
          className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-foreground/80 mb-1 tracking-wide opacity-0 animate-fade-up"
          style={{ animationDelay: "0.75s" }}
        >
          Piano &nbsp;·&nbsp; Guitar &nbsp;·&nbsp; Violin &nbsp;·&nbsp; Vocals
        </p>
        <p
          className="text-base sm:text-lg md:text-xl font-display font-semibold text-foreground/60 mb-3 tracking-wide opacity-0 animate-fade-up"
          style={{ animationDelay: "0.80s" }}
        >
          Dance &nbsp;·&nbsp; Drawing &nbsp;·&nbsp; Western &amp; Karnatic
        </p>
        <p
          className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-muted-foreground mb-8 sm:mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          Offline & Online Classes
        </p>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.9s" }}
        >
          <Button
            variant="gold"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Enroll Now
          </Button>
          <Button
            variant="coral"
            size="xl"
            className="w-full sm:w-auto"
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            View Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
