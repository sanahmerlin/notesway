import { Button } from "@/components/ui/button";
import { Music, Clock, BookOpen } from "lucide-react";

interface InstrumentDetail {
  id: string;
  title: string;
  overview: string;
  learn: string[];
  duration: string;
  mode: string;
}

const instruments: InstrumentDetail[] = [
  {
    id: "violin",
    title: "Violin",
    overview:
      "Our violin program develops disciplined technique, tonal awareness, and musical expression. Students progress through structured levels — from holding the bow to performing full concertos — with personalized mentoring at every stage.",
    learn: [
      "Proper bow technique and posture",
      "Scales, arpeggios, and intonation",
      "Sight-reading and music theory",
      "Vibrato, dynamics, and expression",
      "Solo and ensemble performance",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Online & Offline",
  },
  {
    id: "piano",
    title: "Piano",
    overview:
      "From classical foundations to contemporary styles, our piano course builds technical precision and artistic interpretation. Each student receives a tailored curriculum that matches their pace, ambitions, and musical interests.",
    learn: [
      "Hand position, finger independence, and pedaling",
      "Music theory, harmony, and chord progressions",
      "Sight-reading and ear training",
      "Classical, jazz, and modern repertoire",
      "Performance preparation and stage presence",
    ],
    duration: "3 months per level · 5 levels",
    mode: "Online & Offline",
  },
  {
    id: "guitar",
    title: "Guitar",
    overview:
      "Whether acoustic or electric, our guitar program covers essential techniques and creative expression. Students learn to play with confidence, developing their own musical voice through structured yet flexible instruction.",
    learn: [
      "Chords, strumming patterns, and fingerpicking",
      "Scales, modes, and improvisation",
      "Music theory applied to the fretboard",
      "Song arrangement and composition",
      "Performance techniques and confidence building",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Online & Offline",
  },
];

const InstrumentDetailsSection = () => {
  return (
    <div>
      {instruments.map((inst, i) => (
        <section
          key={inst.id}
          id={`detail-${inst.id}`}
          className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Course Detail</p>
              <h2 className="heading-section text-foreground">{inst.title}</h2>
              <div className="section-divider mt-6 !mx-0" />
            </div>

            <p className="text-body mb-10">{inst.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card border border-border/50 rounded-sm p-5">
                <BookOpen className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  What You'll Learn
                </h4>
                <ul className="space-y-2">
                  {inst.learn.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-primary mt-1 text-[8px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border border-border/50 rounded-sm p-5">
                <Clock className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Duration
                </h4>
                <p className="text-sm text-muted-foreground">{inst.duration}</p>
              </div>

              <div className="bg-card border border-border/50 rounded-sm p-5">
                <Music className="w-5 h-5 text-primary mb-3" strokeWidth={1.5} />
                <h4 className="font-display text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                  Mode
                </h4>
                <p className="text-sm text-muted-foreground">{inst.mode}</p>
              </div>
            </div>

            <Button variant="gold" size="lg" asChild>
              <a href="#enroll">Enroll in {inst.title}</a>
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default InstrumentDetailsSection;
