import Navbar from "@/components/Navbar";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default CommunityPage;


