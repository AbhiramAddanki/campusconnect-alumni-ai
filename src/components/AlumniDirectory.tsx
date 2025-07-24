import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Building, Calendar, MessageCircle } from "lucide-react";
import { useState } from "react";

// Mock alumni data
const mockAlumni = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Google",
    role: "Senior Software Engineer",
    location: "San Francisco, CA",
    graduationYear: 2019,
    expertise: ["React", "Node.js", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Microsoft",
    role: "Product Manager",
    location: "Seattle, WA",
    graduationYear: 2018,
    expertise: ["Product Strategy", "Data Analysis", "Leadership"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Johnson",
    company: "Tesla",
    role: "Design Lead",
    location: "Austin, TX",
    graduationYear: 2020,
    expertise: ["UI/UX Design", "Design Systems", "Prototyping"],
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const AlumniDirectory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAlumni = mockAlumni.filter(alumni =>
    alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alumni.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section id="directory" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Alumni Directory</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with successful alumni who share your interests and career aspirations
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, company, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAlumni.map((alumni) => (
            <Card key={alumni.id} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <img
                  src={alumni.image}
                  alt={alumni.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <CardTitle className="text-xl">{alumni.name}</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  {alumni.role}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building className="h-4 w-4" />
                    <span>{alumni.company}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{alumni.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Class of {alumni.graduationYear}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {alumni.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-gradient-primary" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAlumni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No alumni found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AlumniDirectory;