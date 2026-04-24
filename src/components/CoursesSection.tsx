import { useState } from "react";
import { Button } from "@/components/ui/button";
import { courses, type Course } from "@/data/courses";
import CourseDetailModal from "@/components/CourseDetailModal";

const CoursesSection = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [open, setOpen] = useState(false);

  const handleViewDetails = (course: Course) => {
    setSelectedCourse(course);
    setOpen(true);
  };

  return (
    <section id="courses" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Programs</p>
          <h2 className="heading-section text-foreground">Courses</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-card rounded-2xl overflow-hidden card-soft card-soft-hover transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-wash-sky">
                <img
                  src={course.image}
                  alt={course.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 font-light">
                  {course.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-auto"
                  onClick={() => handleViewDetails(course)}
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CourseDetailModal course={selectedCourse} open={open} onOpenChange={setOpen} />
    </section>
  );
};

export default CoursesSection;
