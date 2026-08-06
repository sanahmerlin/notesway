import violinDark from "@/assets/violin-new.png";
import pianoDark from "@/assets/piano-dark.jpg";
import guitarDark from "@/assets/guitar-dark.jpg";
import vocalsDark from "@/assets/vocals-dark.jpg";
import danceDark from "@/assets/dance-dark.jpg";
import drumsImage from "@/assets/drums.jpg";

export interface Course {
  id: string;
  title: string;
  image: string;
  alt: string;
  description: string;
  overview: string;
  learn: string[];
  duration: string;
  mode: string;
  comingSoon?: boolean;
}

export const courses: Course[] = [
  {
    id: "violin-western",
    title: "Violin (Western)",
    image: violinDark,
    alt: "Violin in dramatic dark lighting",
    description:
      "Refine your technique and artistry through disciplined Western classical and contemporary violin training.",
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
    mode: "Online",
  },
  {
    id: "violin-carnatic",
    title: "Violin (Carnatic)",
    image: violinDark,
    alt: "Violin in dramatic dark lighting",
    description:
      "Explore the rich tradition of Carnatic violin with emphasis on ragas, gamakas, and expressive ornamentation.",
    overview:
      "Our Carnatic violin program immerses students in the rich South Indian classical tradition. From sarali varisai to elaborate raga alapana, students develop deep melodic awareness and ornamental fluency unique to Carnatic music.",
    learn: [
      "Sarali varisai and alankarams",
      "Raga identification and alapana",
      "Gamakas and Carnatic ornamentation",
      "Kriti rendition and manodharma",
      "Accompaniment and solo performance",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Online",
  },
  {
    id: "piano",
    title: "Piano",
    image: pianoDark,
    alt: "Piano keys in dramatic dark lighting",
    description:
      "Develop mastery across classical repertoire, jazz harmony, and modern composition on the piano.",
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
    mode: "Online",
  },
  {
    id: "guitar",
    title: "Guitar",
    image: guitarDark,
    alt: "Guitar in dramatic dark lighting",
    description:
      "From fingerstyle precision to expressive performance — build your voice on the guitar.",
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
    mode: "Online",
  },
  {
    id: "vocals-western",
    title: "Vocals (Western)",
    image: vocalsDark,
    alt: "Vocalist singing in dramatic dark lighting",
    description:
      "Develop vocal range, breath control, and performance skills across pop, jazz, and classical Western styles.",
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
    mode: "Online",
  },
  {
    id: "vocals-carnatic",
    title: "Vocals (Carnatic)",
    image: vocalsDark,
    alt: "Vocalist singing in dramatic dark lighting",
    description:
      "Master Carnatic vocal traditions including swaras, ragas, kritis, and the art of manodharma sangeetham.",
    overview:
      "Rooted in the South Indian classical tradition, our Carnatic vocal program guides students from foundational swaras through complex compositions and improvisation. Students develop sruti alignment, raga knowledge, and expressive depth.",
    learn: [
      "Sarali varisai, janta varisai, and alankarams",
      "Raga recognition and swara patterns",
      "Kriti singing and sahitya pronunciation",
      "Manodharma — neraval and kalpana swaras",
      "Tala and laya awareness",
    ],
    duration: "3 months per level · 5 levels",
    mode: "Online",
  },
  {
    id: "dance",
    title: "Dance",
    image: danceDark,
    alt: "Classical dancer in dramatic dark lighting",
    description:
      "Learn graceful movement, rhythm, and expression through structured dance training rooted in tradition.",
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
    mode: "Online",
  },
  {
    id: "drums",
    title: "Drums",
    image: drumsImage,
    alt: "Young girl smiling and playing a drum set",
    description:
      "Master rhythm, coordination, and tempo control through energetic and structured drum kit training.",
    overview:
      "Our drum kit program builds foundational rhythm, hand-foot coordination, and timing accuracy. From basic beats to advanced rudiments and fills, students learn to play across rock, pop, jazz, and Latin styles with confidence.",
    learn: [
      "Rudiments, hand-foot coordination, and posture",
      "Basic rock, pop, and jazz beats",
      "Fill-ins, tempo control, and timing precision",
      "Reading drum sheet music and notation",
      "Playing along with tracks and solo performance",
    ],
    duration: "3 months per level · 4 levels",
    mode: "Online",
  },
];
