import { useEffect, useRef, useState } from "react";
import { Linkedin, Github, Mail, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  github: string;
  email: string;
}

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start typewriter effect
          startTypewriter();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startTypewriter = () => {
    const text = "Meet Our Team";
    let i = 0;
    const timer = setInterval(() => {
      setTypewriterText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        // Hide cursor after animation completes
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, 100);
  };

  const teamMembers: TeamMember[] = [
    {
      name: "Priya Sharma",
      role: "Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      description: "Priya is a passionate coder and leader who drives the vision of AlgoZenith VIEW. With expertise in competitive programming and team management, she mentors students to excel in coding competitions and leads the club towards new heights of innovation.",
      linkedin: "#",
      github: "#",
      email: "priya@view.edu.in",
    },
    {
      name: "Anjali Reddy",
      role: "Co-Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      description: "Anjali supports the club's operations and coordinates between different teams. Her organizational skills and technical knowledge in algorithms make her an invaluable asset in planning workshops and hackathons.",
      linkedin: "#",
      github: "#",
      email: "anjali@view.edu.in",
    },
    {
      name: "Sneha Patel",
      role: "Competitive Programming Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      description: "Sneha specializes in competitive programming with multiple wins in national coding competitions. She conducts intensive training sessions and guides students in mastering advanced algorithms and problem-solving techniques.",
      linkedin: "#",
      github: "#",
      email: "sneha@view.edu.in",
    },
    {
      name: "Kavya Krishna",
      role: "DSA Lead",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
      description: "Kavya leads the Data Structures and Algorithms wing, creating comprehensive learning paths for students. Her expertise in teaching complex DSA concepts in simple terms helps students build strong foundations.",
      linkedin: "#",
      github: "#",
      email: "kavya@view.edu.in",
    },
    {
      name: "Divya Nair",
      role: "UI/UX Lead",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop",
      description: "Divya brings creative excellence to the club with her exceptional UI/UX design skills. She leads design workshops and ensures all club projects have beautiful, user-friendly interfaces.",
      linkedin: "#",
      github: "#",
      email: "divya@view.edu.in",
    },
    {
      name: "Meera Gupta",
      role: "Graphic Designer Lead",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "Meera is responsible for all visual content and branding of AlgoZenith VIEW. Her creative designs enhance the club's social media presence and event promotions.",
      linkedin: "#",
      github: "#",
      email: "meera@view.edu.in",
    },
    {
      name: "Isha Verma",
      role: "Social Media Manager",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop",
      description: "Isha manages the club's online presence and engagement. She creates compelling content that showcases achievements and keeps the community informed about upcoming events and opportunities.",
      linkedin: "#",
      github: "#",
      email: "isha@view.edu.in",
    },
    {
      name: "Riya Kumar",
      role: "Event Manager",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description: "Riya orchestrates all club events from hackathons to workshops. Her attention to detail and coordination skills ensure every event runs smoothly and creates lasting impact on participants.",
      linkedin: "#",
      github: "#",
      email: "riya@view.edu.in",
    },
    {
      name: "Aaradhya Singh",
      role: "Outreach Lead",
      image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=400&h=400&fit=crop",
      description: "Aaradhya builds partnerships and drives campus engagement. She leads outreach programs and collaborations with industry and student bodies.",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "aaradhya@view.edu.in",
    },
    {
      name: "Neha Rao",
      role: "Content & Media Lead",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      description: "Neha leads content strategy and media production for the club. She tells our story through compelling visuals and copy across channels.",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      email: "neha@view.edu.in",
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
            {typewriterText || "Meet Our"} <span className="text-gradient">{typewriterText ? "Team" : ""}</span>
            {showCursor && <span className="animate-pulse text-primary/60">|</span>}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            The passionate leaders driving innovation and excellence
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center group transition-all duration-700 delay-${
                (index % 4) * 100
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index >= teamMembers.length - 2 ? "lg:col-span-1 xl:col-span-2" : ""}`}
            >
              {/* Profile Image */}
              <div 
                className="relative mb-6 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden ring-3 sm:ring-4 ring-muted group-hover:ring-primary transition-all duration-300 group-hover:scale-105">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:filter group-hover:blur-md transition-all duration-300"
                  />
                  {/* Social Links Overlay */}
                  <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                    <a
                      href={member.linkedin}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                    <a
                      href={member.github}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-black group-hover:underline decoration-gray-600 decoration-2 underline-offset-4 transition-all duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Member Details Dialog */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-2xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedMember.name}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col md:flex-row gap-6 pt-4">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-48 h-48 rounded-full object-cover ring-4 ring-primary/20"
                  />
                </div>
                
                {/* Details */}
                <div className="flex-1 space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                      {selectedMember.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMember.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4">
                    <a
                      href={selectedMember.linkedin}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={selectedMember.github}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${selectedMember.email}`}
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-all"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Team;
