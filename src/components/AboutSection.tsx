const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <p className="brand-name text-xs text-primary mb-4 tracking-[0.4em]">ABOUT US</p>
        <h2 className="heading-section text-foreground mb-8">
          About <span className="text-accent">Notesway</span>
        </h2>
        <p className="text-body max-w-2xl mx-auto mb-6">
          At Notesway, we believe music is a universal language that connects hearts and transforms lives.
          Our academy is dedicated to inspiring musical discovery in students of all ages — from curious
          beginners to passionate performers seeking to refine their craft.
        </p>
        <p className="text-body max-w-2xl mx-auto mb-8">
          With certified instructors and a warm, welcoming environment, we provide personalized lessons
          that nurture talent and build lasting confidence through the art of music.
        </p>
        <p className="font-display text-xl md:text-2xl italic text-primary">
          "Your way to musical discovery"
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
