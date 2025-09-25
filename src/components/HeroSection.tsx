import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, MapPin, Globe, Languages, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Discover Sikkim's{" "}
            <span className="bg-[var(--gradient-sunset)] bg-clip-text text-transparent">
              Sacred Heritage
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in the spiritual journey through 200+ monasteries with 360° virtual tours, 
            ancient archives, and guided cultural experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-[var(--shadow-monastery)]"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Virtual Tour
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-foreground/20 hover:border-primary hover:bg-primary/10 px-8 py-3 text-lg font-semibold"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explore Map
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Card className="bg-card/95 backdrop-blur-sm border-border/50 p-6 text-center shadow-[var(--shadow-elevation)]">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground font-medium">Historic Monasteries</div>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur-sm border-border/50 p-6 text-center shadow-[var(--shadow-elevation)]">
              <div className="text-3xl font-bold text-heritage-blue mb-2">360°</div>
              <div className="text-sm text-muted-foreground font-medium">Virtual Tours</div>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur-sm border-border/50 p-6 text-center shadow-[var(--shadow-elevation)]">
              <div className="text-3xl font-bold text-heritage-gold mb-2">5</div>
              <div className="text-sm text-muted-foreground font-medium">Languages Supported</div>
            </Card>
            
            <Card className="bg-card/95 backdrop-blur-sm border-border/50 p-6 text-center shadow-[var(--shadow-elevation)]">
              <div className="text-3xl font-bold text-heritage-red mb-2">1000+</div>
              <div className="text-sm text-muted-foreground font-medium">Digital Archives</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;