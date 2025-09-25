import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Clock, Users, Globe } from "lucide-react";

const VirtualTours = () => {
  const tours = [
    {
      id: 1,
      title: "Rumtek Monastery - Complete Experience",
      description: "Comprehensive 360° tour covering history, architecture, and spiritual significance",
      duration: "45 min",
      rating: 4.9,
      participants: 2500,
      languages: ["English", "Hindi", "Nepali"],
      featured: true
    },
    {
      id: 2,
      title: "Pemayangtse Heritage Walk",
      description: "Historical journey through Sikkim's oldest monastery with expert commentary",
      duration: "35 min", 
      rating: 4.8,
      participants: 1800,
      languages: ["English", "Tibetan", "Bhutia"],
      featured: true
    },
    {
      id: 3,
      title: "Sacred Sites of Tashiding",
      description: "Spiritual insights into sacred rituals and meditation practices",
      duration: "25 min",
      rating: 4.7,
      participants: 1200,
      languages: ["English", "Hindi"],
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-[var(--gradient-mountain)]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Virtual <span className="text-primary">Tours</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Immerse yourself in 360° virtual experiences of Sikkim's most sacred monasteries 
              from anywhere in the world
            </p>
          </div>
        </section>

        {/* Featured Tours */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Featured Virtual Tours</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tours.map((tour) => (
                <Card key={tour.id} className={`overflow-hidden shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow ${tour.featured ? 'border-primary' : ''}`}>
                  {tour.featured && (
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                      Featured Tour
                    </div>
                  )}
                  
                  <div className="aspect-video bg-[var(--gradient-hero)] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="rounded-full bg-background/20 hover:bg-background/30 text-foreground backdrop-blur-sm">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">
                        <Globe className="w-3 h-3 mr-1" />
                        360° Tour
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Star className="w-4 h-4 mr-1 fill-heritage-gold text-heritage-gold" />
                        {tour.rating}
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg">{tour.title}</CardTitle>
                    <CardDescription>{tour.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {tour.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {tour.participants.toLocaleString()} views
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {tour.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        Start Tour
                      </Button>
                      <Button variant="outline" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VirtualTours;