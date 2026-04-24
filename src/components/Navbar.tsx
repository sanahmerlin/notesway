import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", targetId: "hero" },
  { label: "Courses", targetId: "courses" },
  { label: "Why Us", targetId: "why-us" },
  { label: "Enroll", targetId: "enroll" },
  { label: "Contact", targetId: "contact" },
];

const scrollToSection = (targetId: string) => {
  const el = document.getElementById(targetId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (targetId === "hero") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close mobile menu when clicking outside the nav
  useEffect(() => {
    if (!open) return;
    const handleMouseDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, [open]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
        <button
          onClick={() => scrollToSection("hero")}
          className="brand-name text-base"
        >
          <span className="text-primary">NOTES</span><span className="text-accent">WAY</span>
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.targetId}>
              <button
                onClick={() => scrollToSection(link.targetId)}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.targetId}>
                <button
                  onClick={() => { setOpen(false); scrollToSection(link.targetId); }}
                  className="text-sm uppercase tracking-[0.15em] text-foreground/80 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
