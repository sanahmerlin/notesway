import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import EnrollmentSection from "@/components/EnrollmentSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <InstrumentDetailsSection />
      <WhyChooseUsSection />
      <EnrollmentSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
