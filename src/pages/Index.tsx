import Navbar from "@/components/Navbar";
import HeroAbout from "@/components/HeroAbout";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home" className="scroll-mt-24">
          <HeroAbout />
        </section>
        <section id="events" className="scroll-mt-24">
          <Events />
        </section>
        <section id="team" className="scroll-mt-24">
          <Team />
        </section>
        <section id="community" className="scroll-mt-24">
          <Community />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
