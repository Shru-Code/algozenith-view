
const Hero = () => {

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12 px-4 bg-gradient-to-br from-hero-bg via-background to-muted/30">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">VIEW</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed px-4">
              Empowering Women in Engineering through{" "}
              <span className="text-primary font-semibold">Innovation</span> &{" "}
              <span className="text-secondary font-semibold">Algorithms</span>
            </p>

            <p className="text-base sm:text-lg text-muted-foreground px-4 max-w-3xl mx-auto">
              Join us at Vignan's Institute of Engineering for Women as we cultivate
              the next generation of female tech leaders through coding excellence,
              hackathons, and innovation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
