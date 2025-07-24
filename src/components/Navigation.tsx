import { Button } from "@/components/ui/button";
import { GraduationCap, MessageSquare, Users, Bot } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-foreground">CampusConnect AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#directory" className="text-muted-foreground hover:text-foreground transition-colors">
            Alumni Directory
          </a>
          <a href="#forum" className="text-muted-foreground hover:text-foreground transition-colors">
            Forum
          </a>
          <a href="#chatbot" className="text-muted-foreground hover:text-foreground transition-colors">
            AI Assistant
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm" className="bg-gradient-primary">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;