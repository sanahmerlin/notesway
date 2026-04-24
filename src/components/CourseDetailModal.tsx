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
      <DialogContent className="max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[20px] p-8">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-3">Course Detail</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            {course.title}
          </h2>
          <div className="h-1 w-16 bg-primary rounded-full" />
        </div>

        <p className="text-muted-foreground leading-relaxed mb-8">{course.overview}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-wash-sky rounded-2xl p-5">
            <BookOpen className="w-6 h-6 text-primary mb-3" strokeWidth={2} />
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

          <div className="bg-wash-peach rounded-2xl p-5">
            <Clock className="w-6 h-6 text-accent mb-3" strokeWidth={2} />
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Duration
            </h4>
            <p className="text-sm text-muted-foreground">{course.duration}</p>
          </div>

          <div className="bg-wash-mint rounded-2xl p-5">
            <Music className="w-6 h-6 text-primary mb-3" strokeWidth={2} />
            <h4 className="font-display text-xs font-bold text-foreground uppercase tracking-wider mb-2">
              Mode
            </h4>
            <p className="text-sm text-muted-foreground">{course.mode}</p>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            variant="gold"
            size="lg"
            asChild
            onClick={() => onOpenChange(false)}
          >
            <a href="#enroll">Enroll in {course.title}</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseDetailModal;
