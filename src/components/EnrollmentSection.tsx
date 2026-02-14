import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EnrollmentSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    age: "",
    instrument: "Piano",
    mode: "Offline",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbysvm_jmfJvHeVsr9BVRXl5S1pwR7oSDdhN6HeT2Uip4G-3EmJ53CYdr5CWMVHh1XcI/exec",
        {
          method: "POST",
          body: JSON.stringify({
            fullName: form.name,
            age: form.age,
            instrument: form.instrument,
            mode: form.mode,
            phoneNumber: form.phone,
            email: form.email,
          }),
        }
      );
      if (!res.ok) throw new Error("Request failed");
      toast({
        title: "Enrollment submitted successfully.",
      });
      setForm({ name: "", age: "", instrument: "Piano", mode: "Offline", phone: "", email: "" });
    } catch {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
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
              <option value="Violin">Violin</option>
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

          <Button type="submit" variant="gold" size="lg" className="w-full mt-2" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit Enrollment"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentSection;
