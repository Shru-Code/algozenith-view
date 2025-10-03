import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const events = [
    {
      title: "CodeSprint 2024",
      date: "March 15-16, 2024",
      location: "VIEW Campus",
      participants: "200+ Students",
      description:
        "24-hour hackathon focused on solving real-world problems with innovative tech solutions.",
      color: "from-primary to-primary/80",
    },
    {
      title: "Algorithm Workshop",
      date: "Every Saturday",
      location: "Online & Offline",
      participants: "50+ Students",
      description:
        "Weekly intensive sessions on competitive programming and advanced algorithms.",
      color: "from-secondary to-secondary/80",
    },
    {
      title: "Tech Talk Series",
      date: "Monthly",
      location: "Auditorium",
      participants: "300+ Students",
      description:
        "Industry experts share insights on emerging technologies and career opportunities.",
      color: "from-accent to-accent/80",
    },
    {
      title: "Women in Tech Summit",
      date: "April 28, 2024",
      location: "Convention Center",
      participants: "500+ Attendees",
      description:
        "Annual summit celebrating achievements of women in technology and fostering networking.",
      color: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Events</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Join us in these exciting events and be part of our growing community
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${event.color} p-6 flex items-end`}>
                  <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
