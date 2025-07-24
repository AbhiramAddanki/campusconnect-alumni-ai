import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MessageSquare, Bot } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="CampusConnect AI - Alumni Networking" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Connect with <span className="text-primary-glow">Alumni</span>
          <br />
          Shape Your <span className="text-primary-glow">Future</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
          Bridge the gap between current students and successful alumni through 
          AI-powered networking, mentorship, and career guidance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-elegant">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Explore Alumni
          </Button>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <Users className="h-12 w-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alumni Directory</h3>
            <p className="text-white/80">Discover and connect with alumni from your field of interest</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <MessageSquare className="h-12 w-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discussion Forum</h3>
            <p className="text-white/80">Join conversations about careers, industry trends, and opportunities</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <Bot className="h-12 w-12 text-primary-glow mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
            <p className="text-white/80">Get personalized career advice and guidance powered by AI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;