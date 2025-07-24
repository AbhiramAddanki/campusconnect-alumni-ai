import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AlumniDirectory from "@/components/AlumniDirectory";
import DiscussionForum from "@/components/DiscussionForum";
import AIChatbot from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AlumniDirectory />
      <DiscussionForum />
      <AIChatbot />
    </div>
  );
};

export default Index;
