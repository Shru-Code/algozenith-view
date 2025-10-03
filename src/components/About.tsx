import { useEffect, useRef, useState } from "react";
import { Code2, Users, Trophy, Lightbulb } from "lucide-react";
import algoZenithLogo from "@/assets/algozenith-logo.svg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code2,
      title: "Coding Excellence",
      description: "Master algorithms and data structures with expert guidance",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a vibrant community of passionate women in tech",
    },
    {
      icon: Trophy,
      title: "Competition Ready",
      description: "Prepare for hackathons and coding competitions",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Transform ideas into impactful tech solutions",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">VIEW</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                VIEW at Vignan's Institute of Engineering for Women is
                dedicated to creating a thriving ecosystem where women engineers excel
                in competitive programming, algorithmic thinking, and software
                development.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe in breaking barriers and creating opportunities for women
                to lead in technology. Through workshops, hackathons, and mentorship
                programs, we're building a future where women shape the tech industry.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
