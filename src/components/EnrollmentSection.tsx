import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const EnrollmentSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    age: "",
    instrument: "Piano",
    mode: "Offline",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          mode: form.mode,
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
      setForm({ name: "", age: "", instrument: "Piano", mode: "Offline", phone: "", email: "", message: "" });
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
    "h-12 bg-card border-border/50 text-foreground placeholder:text-muted-foreground/50 rounded-sm focus:border-primary focus:ring-primary/30";
  const selectClass =
    "h-12 w-full rounded-sm border border-border/50 bg-card px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary";

  return (
    <section id="enroll" className="section-padding bg-secondary">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Begin Your Journey</p>
          <h2 className="heading-section text-foreground">Enroll Now</h2>
          <div className="section-divider mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select name="instrument" value={form.instrument} onChange={handleChange} className={selectClass}>
              <option value="Piano">Piano</option>
              <option value="Guitar">Guitar</option>
              <option value="Violin (Western)">Violin (Western)</option>
              <option value="Violin (Karnatic)">Violin (Karnatic)</option>
              <option value="Vocals (Western)">Vocals (Western)</option>
              <option value="Vocals (Karnatic)">Vocals (Karnatic)</option>
              <option value="Dance">Dance</option>
              <option value="Drawing">Drawing</option>
            </select>
            <select name="mode" value={form.mode} onChange={handleChange} className={selectClass}>
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>

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
            className="w-full rounded-sm border border-border/50 bg-card px-3 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-vertical min-h-[100px]"
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
