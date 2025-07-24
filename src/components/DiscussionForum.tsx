import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Heart, Calendar, User } from "lucide-react";

// Mock forum posts
const mockPosts = [
  {
    id: 1,
    title: "Tips for Landing Your First Tech Job",
    author: "Sarah Chen",
    authorRole: "Senior Software Engineer at Google",
    content: "As someone who went through the job search process recently, I wanted to share some insights that helped me land my first tech role...",
    timestamp: "2 hours ago",
    category: "Career Advice",
    likes: 24,
    replies: 8,
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 2,
    title: "Networking Events in the Bay Area",
    author: "Michael Rodriguez",
    authorRole: "Product Manager at Microsoft",
    content: "I've compiled a list of the best networking events happening this month in the Bay Area. Great opportunities to meet fellow alumni and industry professionals...",
    timestamp: "5 hours ago",
    category: "Networking",
    likes: 18,
    replies: 12,
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
  },
  {
    id: 3,
    title: "Transitioning from Engineering to Product Management",
    author: "Emily Johnson",
    authorRole: "Design Lead at Tesla",
    content: "Many engineers wonder about making the switch to PM. Here's my experience and advice for those considering this career pivot...",
    timestamp: "1 day ago",
    category: "Career Transition",
    likes: 31,
    replies: 15,
    authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
  }
];

const DiscussionForum = () => {
  return (
    <section id="forum" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discussion Forum</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join conversations about career growth, industry insights, and opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button className="bg-gradient-primary">
              Start New Discussion
            </Button>
          </div>

          <div className="space-y-6">
            {mockPosts.map((post) => (
              <Card key={post.id} className="shadow-card hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg mb-1">{post.title}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="font-medium">{post.author}</span>
                          <span>•</span>
                          <span>{post.authorRole}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{post.timestamp}</span>
                          <Badge variant="outline" className="text-xs ml-2">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-base mb-4 line-clamp-2">
                    {post.content}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      
                      <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                        <MessageCircle className="h-4 w-4" />
                        <span className="text-sm">{post.replies} replies</span>
                      </button>
                    </div>
                    
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscussionForum;