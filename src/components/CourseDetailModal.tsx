import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Music, Clock, BookOpen } from "lucide-react";

export interface CourseDetail {
  id: string;
  title: string;
  overview: string;
  learn: string[];
  duration: string;
  mode: string;
  comingSoon?: boolean;
}

interface CourseDetailModalProps {
  course: CourseDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CourseDetailModal = ({ course, open, onOpenChange }: CourseDetailModalProps) => {
  if (!course) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-[700px] max-h-[90vh] overflow-y-auto rounded-[20px] p-5 sm:p-6 md:p-7">
        <div className="mb-4">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-2">Course Detail</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            {course.title}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">{course.overview}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-wash-sky rounded-2xl p-5">
            <BookOpen className="w-6 h-6 text-primary mb-2" strokeWidth={2} />
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              What You'll Learn
            </h4>
            <ul className="space-y-1.5">
              {course.learn.map((item) => (
                <li key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-accent mt-1 text-[10px]">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-rows-2 gap-4">
            <div className="bg-wash-peach rounded-2xl p-5">
              <Clock className="w-6 h-6 text-accent mb-2" strokeWidth={2} />
              <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Duration
              </h4>
              <p className="text-sm text-muted-foreground">{course.duration}</p>
            </div>

            <div className="bg-wash-mint rounded-2xl p-5">
              <Music className="w-6 h-6 text-primary mb-2" strokeWidth={2} />
              <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                Mode
              </h4>
              <p className="text-sm text-muted-foreground">{course.mode}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="gold"
            size="lg"
            disabled={course.comingSoon}
            onClick={() => {
              onOpenChange(false);
              setTimeout(() => {
                document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth", block: "start" });
                window.dispatchEvent(new CustomEvent('select-course', { detail: course.title }));
              }, 150);
            }}
          >
            {course.comingSoon ? "Enrollment Opening Soon" : `Enroll in ${course.title}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailModal;
