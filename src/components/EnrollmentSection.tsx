import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enrollment Submitted!",
      description: "We'll get back to you shortly. Thank you for choosing Notesway!",
    });
    setForm({ name: "", age: "", instrument: "Piano", mode: "Offline", phone: "", email: "", message: "" });
  };

  return (
    <section id="enroll" className="section-padding bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="brand-name text-xs text-primary mb-4 tracking-[0.4em]">JOIN US</p>
          <h2 className="heading-section text-foreground">
            Enroll <span className="text-accent">Now</span>
          </h2>
          <p className="text-body mt-4">Begin your musical journey today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              className="h-12 bg-muted/50 border-border"
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
              className="h-12 bg-muted/50 border-border"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <select
              name="instrument"
              value={form.instrument}
              onChange={handleChange}
              className="h-12 w-full rounded-lg border border-border bg-muted/50 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="Piano">Piano</option>
              <option value="Guitar">Guitar</option>
              <option value="Violin">Violin</option>
            </select>
            <select
              name="mode"
              value={form.mode}
              onChange={handleChange}
              className="h-12 w-full rounded-lg border border-border bg-muted/50 px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              required
              className="h-12 bg-muted/50 border-border"
            />
            <Input
              name="email"
              placeholder="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="h-12 bg-muted/50 border-border"
            />
          </div>

          <Textarea
            name="message"
            placeholder="Any message or questions?"
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="bg-muted/50 border-border"
          />

          <Button type="submit" size="lg" className="w-full">
            Submit Enrollment
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentSection;
