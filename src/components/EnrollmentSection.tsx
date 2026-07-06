import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const INSTRUMENTS = [
  "Piano",
  "Guitar",
  "Violin (Western)",
  "Violin (Carnatic)",
  "Vocals (Western)",
  "Vocals (Carnatic)",
  "Dance",
  "Drawing",
] as const;



const EnrollmentSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    age: "",
    instrument: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleSelectCourse = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (INSTRUMENTS.includes(customEvent.detail as any)) {
        setForm((f) => ({ ...f, instrument: customEvent.detail }));
      }
    };
    window.addEventListener('select-course', handleSelectCourse);
    return () => window.removeEventListener('select-course', handleSelectCourse);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke<{
        success: boolean;
        error?: string;
      }>("enrollment-submit", {
        body: {
          fullName: form.name,
          age: form.age,
          instrument: form.instrument,
          mode: "Online",
          phoneNumber: form.phone,
          email: form.email,
          message: form.message,
        },
      });

      if (error || !data?.success) {
        throw new Error(data?.error || error?.message || "Submission failed");
      }

      toast({
        title: "Enrollment submitted successfully.",
      });
      setForm({ name: "", age: "", instrument: "", phone: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "h-12 bg-card border-border text-foreground placeholder:text-muted-foreground/60 rounded-full px-5 focus:border-primary focus:ring-primary/30";
  const selectClass =
    "h-12 w-full rounded-full border border-border bg-card px-5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <section id="enroll" className="section-padding bg-wash-peach">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Begin Your Journey</p>
          <h2 className="heading-section text-foreground">Enroll Now</h2>
          <div className="section-divider mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-2xl p-5 sm:p-8 card-soft">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <Input
              name="age"
              placeholder="Age"
              type="number"
              min="3"
              max="99"
              value={form.age}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <select
            name="instrument"
            value={form.instrument}
            onChange={handleChange}
            required
            className={selectClass}
          >
            <option value="" disabled>Select Course</option>
            {INSTRUMENTS.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className={inputClass}
            />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-2xl border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-vertical min-h-[100px]"
          />

          <Button type="submit" variant="gold" size="lg" className="w-full mt-2" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enrollment"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentSection;
