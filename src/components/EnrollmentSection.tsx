import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const INSTRUMENTS = [
  "Piano",
  "Guitar",
  "Violin (Western)",
  "Violin (Karnatic)",
  "Vocals (Western)",
  "Vocals (Karnatic)",
  "Dance",
  "Drawing",
] as const;

const OFFLINE_ONLY = new Set<string>(["Dance", "Drawing"]);
const ONLINE_ONLY = new Set<string>([]);

const getAvailableModes = (instrument: string): string[] => {
  if (!instrument) return [];
  if (OFFLINE_ONLY.has(instrument)) return ["Offline"];
  if (ONLINE_ONLY.has(instrument)) return ["Online"];
  return ["Offline", "Online"];
};

const EnrollmentSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    age: "",
    instrument: "",
    mode: "",
    phone: "",
    email: "",
    message: "",
  });

  const availableModes = useMemo(() => getAvailableModes(form.instrument), [form.instrument]);

  useEffect(() => {
    if (!form.instrument) return;
    if (availableModes.length === 1 && form.mode !== availableModes[0]) {
      setForm((f) => ({ ...f, mode: availableModes[0] }));
    } else if (form.mode && !availableModes.includes(form.mode)) {
      setForm((f) => ({ ...f, mode: "" }));
    }
  }, [form.instrument, availableModes, form.mode]);

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
      setForm({ name: "", age: "", instrument: "", mode: "", phone: "", email: "", message: "" });
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
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-bold mb-4">Begin Your Journey</p>
          <h2 className="heading-section text-foreground">Enroll Now</h2>
          <div className="section-divider mt-6" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card rounded-2xl p-8 card-soft">
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
