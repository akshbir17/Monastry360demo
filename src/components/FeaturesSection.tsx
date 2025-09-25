import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Map, 
  Archive, 
  Headphones, 
  Calendar, 
  Search, 
  Globe, 
  Languages,
  Download,
  ArrowRight
} from "lucide-react";
import monasteryImage from "@/assets/monastery-main.jpg";
import manuscriptsImage from "@/assets/manuscripts.jpg";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[var(--gradient-mountain)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Explore Sacred <span className="text-primary">Heritage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience Sikkim's spiritual legacy through cutting-edge technology and centuries-old wisdom
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Interactive Map Feature */}
          <Card className="overflow-hidden shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow">
            <div className="relative h-64">
              <img 
                src={monasteryImage} 
                alt="Interactive Heritage Map" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  <Map className="w-3 h-3 mr-1" />
                  Interactive
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="w-5 h-5 mr-2 text-primary" />
                Interactive Heritage Map
              </CardTitle>
              <CardDescription>
                Navigate through Sikkim's monastery network with GPS-enabled routes, 
                transport integration, and curated heritage trails.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">GPS Routes</Badge>
                <Badge variant="outline">200+ Locations</Badge>
                <Badge variant="outline">Heritage Trails</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Explore Map <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Digital Archives Feature */}
          <Card className="overflow-hidden shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow">
            <div className="relative h-64">
              <img 
                src={manuscriptsImage} 
                alt="Digital Archives" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-4 left-4">
                <Badge className="bg-heritage-gold text-foreground">
                  <Archive className="w-3 h-3 mr-1" />
                  AI-Powered
                </Badge>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Archive className="w-5 h-5 mr-2 text-heritage-gold" />
                Digital Archives
              </CardTitle>
              <CardDescription>
                Explore thousands of digitally preserved manuscripts, murals, and historical 
                documents with AI-powered search and translation capabilities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">AI Search</Badge>
                <Badge variant="outline">1000+ Documents</Badge>
                <Badge variant="outline">Translation</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Browse Archives <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="w-5 h-5 mr-2 text-heritage-blue" />
                Smart Audio Guide
              </CardTitle>
              <CardDescription>
                Location-aware audio guides with expert narration, supporting multiple 
                languages and offline mode for seamless monastery exploration.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Languages className="w-4 h-4 mr-1" />
                    5 Languages
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download className="w-4 h-4 mr-1" />
                    Offline Mode
                  </div>
                </div>
                <Button size="sm">Listen</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-heritage-red" />
                Cultural Calendar
              </CardTitle>
              <CardDescription>
                Experience the rich cultural traditions of Sikkim through festivals, rituals, 
                and spiritual events happening across monasteries throughout the year.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Globe className="w-4 h-4 mr-1" />
                    Live Events
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Search className="w-4 h-4 mr-1" />
                    Categories
                  </div>
                </div>
                <Button size="sm">View Events</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;