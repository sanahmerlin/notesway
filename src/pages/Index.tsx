import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <EnrollmentSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
