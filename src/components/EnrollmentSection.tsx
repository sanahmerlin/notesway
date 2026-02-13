const EnrollmentSection = () => {
  return (
    <section id="enroll" className="section-padding bg-secondary">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-4">Begin Your Journey</p>
          <h2 className="heading-section text-foreground">Enroll Now</h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="w-full flex justify-center">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfDE54c_gndARZ78kb3kxI8w9t1gLBVVPo4rB1DvrDig3XcOg/viewform?embedded=true"
            width="100%"
            height="1437"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="max-w-full rounded-sm"
            style={{ minHeight: "1437px" }}
            title="Notesway Enrollment Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSection;
