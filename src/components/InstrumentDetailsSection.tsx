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
    id: "violin-western",
    title: "Violin (Western)",
    overview:
      "Our Western violin program develops disciplined technique, tonal awareness, and musical expression. Students progress through structured levels — from holding the bow to performing full concertos — with personalized mentoring at every stage.",
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
    id: "violin-karnatic",
    title: "Violin (Karnatic)",
    overview:
      "Our Karnatic violin program immerses students in the rich South Indian classical tradition. From sarali varisai to elaborate raga alapana, students develop deep melodic awareness and ornamental fluency unique to Karnatic music.",
    learn: [
      "Sarali varisai and alankarams",
      "Raga identification and alapana",
      "Gamakas and Karnatic ornamentation",
      "Kriti rendition and manodharma",
      "Accompaniment and solo performance",
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
  {
    id: "vocals-western",
    title: "Vocals (Western)",
    overview:
      "Our Western vocal program trains students in breath control, pitch accuracy, and expressive singing across pop, jazz, classical, and contemporary styles. Each level builds confidence and vocal range through structured exercises and repertoire.",
    learn: [
      "Breath support and diaphragmatic control",
      "Pitch accuracy and ear training",
      "Vocal range expansion and registers",
      "Pop, jazz, and classical repertoire",
      "Stage presence and microphone technique",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Online & Offline",
  },
  {
    id: "vocals-karnatic",
    title: "Vocals (Karnatic)",
    overview:
      "Rooted in the South Indian classical tradition, our Karnatic vocal program guides students from foundational swaras through complex compositions and improvisation. Students develop sruti alignment, raga knowledge, and expressive depth.",
    learn: [
      "Sarali varisai, janta varisai, and alankarams",
      "Raga recognition and swara patterns",
      "Kriti singing and sahitya pronunciation",
      "Manodharma — neraval and kalpana swaras",
      "Tala and laya awareness",
    ],
    duration: "3 months per level · 5 levels",
    mode: "Online & Offline",
  },
  {
    id: "dance",
    title: "Dance",
    overview:
      "Our dance program combines traditional and contemporary forms, building grace, rhythm, and expression. Students learn foundational movements, choreography, and performance skills in a structured and encouraging environment.",
    learn: [
      "Basic postures, adavus, and footwork",
      "Rhythm and tala coordination",
      "Hand gestures (mudras) and facial expressions",
      "Choreography and sequence building",
      "Stage performance and presentation",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Offline",
  },
  {
    id: "drawing",
    title: "Drawing",
    overview:
      "Our drawing program develops foundational visual art skills — from basic sketching to advanced shading and composition. Students explore pencil, charcoal, and mixed media while building their creative confidence and artistic eye.",
    learn: [
      "Line work, shapes, and proportions",
      "Shading, textures, and tonal values",
      "Perspective and spatial awareness",
      "Still life, portraiture, and landscape",
      "Creative composition and personal style",
    ],
    duration: "3 months per level · 3 levels",
    mode: "Offline",
  },
];

const washes = ["bg-background", "bg-wash-sky", "bg-wash-mint", "bg-wash-peach", "bg-wash-lavender"];

const InstrumentDetailsSection = () => {
  return (
    <div>
      {instruments.map((inst, i) => (
        <section
          key={inst.id}
          id={`detail-${inst.id}`}
          className={`section-padding ${washes[i % washes.length]}`}
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Course Detail</p>
              <h2 className="heading-section text-foreground">{inst.title}</h2>
              <div className="section-divider mt-6 !mx-0" />
            </div>

            <p className="text-body mb-10">{inst.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-card rounded-2xl p-6 card-soft">
                <BookOpen className="w-6 h-6 text-primary mb-3" strokeWidth={2} />
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                  What You'll Learn
                </h4>
                <ul className="space-y-2">
                  {inst.learn.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                      <span className="text-accent mt-1 text-[10px]">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-6 card-soft">
                <Clock className="w-6 h-6 text-accent mb-3" strokeWidth={2} />
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                  Duration
                </h4>
                <p className="text-sm text-muted-foreground">{inst.duration}</p>
              </div>

              <div className="bg-card rounded-2xl p-6 card-soft">
                <Music className="w-6 h-6 text-primary mb-3" strokeWidth={2} />
                <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-2">
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
