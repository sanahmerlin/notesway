import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Reach Out</p>
          <h2 className="heading-section text-foreground">Contact</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">Location</h3>
                <p className="text-sm text-muted-foreground font-light">Kumbalanghi, Kochi, Kerala, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+918281656235" className="text-sm text-muted-foreground font-light hover:text-primary transition-colors">+91 8281656235</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-1">WhatsApp</h3>
                <Button variant="gold-outline" size="sm" asChild>
                  <a href="https://wa.me/918281656235" target="_blank" rel="noopener noreferrer">
                    Chat with us
                  </a>
                </Button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/notesway"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border/50 flex items-center justify-center hover:border-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="rounded-sm overflow-hidden border border-border/30 h-80 lg:h-auto">
            <iframe
              title="Notesway Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.58073606!2d76.27!3d9.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bee40e1b0c1f%3A0x4b5e1c2c1b0c1f!2sKumbalanghi%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px", filter: "invert(90%) hue-rotate(180deg) brightness(0.7) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
