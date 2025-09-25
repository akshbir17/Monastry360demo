import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Download, 
  Globe, 
  Clock, 
  Headphones,
  MapPin,
  User,
  Pause
} from "lucide-react";

const AudioGuide = () => {
  const audioGuides = [
    {
      id: 1,
      title: "Complete Rumtek Monastery Guide",
      narrator: "Lama Tenzin",
      duration: "45 min",
      language: "English",
      downloads: 2500,
      locations: 10,
      description: "Comprehensive audio tour covering history, architecture, and spiritual significance",
      featured: true
    },
    {
      id: 2,
      title: "Pemayangtse Heritage Walk", 
      narrator: "Dr. Karma Sherpa",
      duration: "35 min",
      language: "English",
      downloads: 1800,
      locations: 8,
      description: "Historical journey through Sikkim's oldest monastery with expert commentary",
      featured: true
    },
    {
      id: 3,
      title: "Sacred Sites of Tashiding",
      narrator: "Ani Dolma", 
      duration: "25 min",
      language: "English",
      downloads: 1200,
      locations: 6,
      description: "Spiritual insights into sacred rituals and meditation practices",
      featured: false
    }
  ];

  const languages = [
    { name: "English", available: true },
    { name: "Hindi", available: true },
    { name: "Nepali", available: true },
    { name: "Tibetan", available: true },
    { name: "Bhutia", available: true }
  ];

  const features = [
    "GPS-Enabled Location Awareness",
    "Offline Download Support", 
    "Multi-Language Narration",
    "Expert Commentary",
    "Interactive Route Maps",
    "Cultural Context & History"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-[var(--gradient-mountain)]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Audio <span className="text-primary">Guide</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Location-aware audio guides with expert narration, supporting multiple 
              languages and offline mode for seamless monastery exploration
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Audio Guides */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold">Featured Audio Guides</h2>
              
              <div className="space-y-6">
                {audioGuides.map((guide) => (
                  <Card key={guide.id} className={`shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow ${guide.featured ? 'border-primary' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Audio Player */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-heritage-blue/20 to-primary/20" />
                            <Button size="sm" className="rounded-full bg-background/20 hover:bg-background/30 text-foreground backdrop-blur-sm">
                              <Play className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>

                        {/* Guide Info */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-lg">{guide.title}</h3>
                                {guide.featured && (
                                  <Badge className="bg-primary text-primary-foreground">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                By {guide.narrator} • {guide.duration}
                              </p>
                            </div>
                            
                            <Badge variant="outline">
                              <Globe className="w-3 h-3 mr-1" />
                              {guide.language}
                            </Badge>
                          </div>

                          <p className="text-sm text-muted-foreground mb-4">
                            {guide.description}
                          </p>

                          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-1" />
                              {guide.downloads} downloads
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {guide.locations} locations
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm">
                              <Play className="w-4 h-4 mr-2" />
                              Preview
                            </Button>
                            <Button size="sm" variant="outline">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Language Options */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-heritage-blue" />
                    Language Options
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg">
                      <div className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-primary" />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <Badge variant={lang.available ? "default" : "secondary"}>
                        {lang.available ? "Available" : "Coming Soon"}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Headphones className="w-5 h-5 mr-2 text-heritage-gold" />
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                      <div>
                        <p className="font-medium text-sm">Download Guide</p>
                        <p className="text-xs text-muted-foreground">Choose your preferred language and download for offline use</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                      <div>
                        <p className="font-medium text-sm">Visit Monastery</p>
                        <p className="text-xs text-muted-foreground">Audio automatically plays based on your GPS location</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <p className="font-medium text-sm">Learn & Explore</p>
                        <p className="text-xs text-muted-foreground">Listen to expert commentary and cultural insights</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AudioGuide;