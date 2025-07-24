import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, User } from "lucide-react";
import { useState } from "react";

// Message type definition
type Message = {
  id: number;
  type: 'bot' | 'user';
  content: string;
};

// Mock chat messages
const initialMessages: Message[] = [
  {
    id: 1,
    type: 'bot' as const,
    content: "Hi! I'm your CampusConnect AI assistant. I can help you with career advice, connect you with relevant alumni, or answer questions about your professional journey. How can I assist you today?"
  }
];

// Simple rule-based responses
const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase();
  
  if (message.includes('career') || message.includes('job')) {
    return "For career advice, I recommend connecting with our alumni in your field of interest. You can also check out our discussion forum where professionals share valuable insights about their career journeys.";
  }
  
  if (message.includes('networking') || message.includes('connect')) {
    return "Great question! Start by browsing our alumni directory to find professionals in your field. Look for alumni who share similar interests or work at companies you're interested in. Don't forget to personalize your connection requests!";
  }
  
  if (message.includes('interview') || message.includes('resume')) {
    return "For interview and resume tips, I suggest checking out the recent forum posts by our alumni. Many have shared their experiences and advice. You can also connect directly with alumni who work in your target industry.";
  }
  
  if (message.includes('skills') || message.includes('learn')) {
    return "Based on alumni profiles in our directory, popular skills in tech include React, Python, Product Management, and Data Analysis. Check what skills are trending in your field by browsing alumni profiles!";
  }
  
  return "That's an interesting question! You might want to post this in our discussion forum where alumni can provide detailed insights, or connect with specific alumni who have experience in this area.";
};

const AIChatbot = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user' as const,
      content: inputValue
    };

    // Get bot response
    const botResponse = {
      id: messages.length + 2,
      type: 'bot' as const,
      content: getBotResponse(inputValue)
    };

    setMessages([...messages, userMessage, botResponse]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <section id="chatbot" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Career Assistant</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get personalized career guidance and connect with the right alumni for your goals
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle>CampusConnect AI</CardTitle>
                  <CardDescription>Your personal career guidance assistant</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                    
                    {message.type === 'user' && (
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-secondary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me about careers, networking, or connecting with alumni..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-gradient-primary"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="mt-4">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "How do I network effectively?",
                    "What skills should I learn?",
                    "Resume tips for new grads"
                  ].map((question) => (
                    <Button
                      key={question}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => setInputValue(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIChatbot;