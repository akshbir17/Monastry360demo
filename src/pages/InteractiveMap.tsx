import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Navigation as NavigationIcon, 
  Search, 
  Filter,
  Route,
  Clock,
  Star
} from "lucide-react";

const InteractiveMap = () => {
  const monasteries = [
    {
      name: "Rumtek Monastery",
      location: "East Sikkim",
      type: "Major",
      distance: "24 km",
      rating: 4.9,
      description: "The largest monastery in Sikkim, seat of the Karmapa"
    },
    {
      name: "Pemayangtse",
      location: "West Sikkim", 
      type: "Historic",
      distance: "115 km",
      rating: 4.8,
      description: "One of Sikkim's oldest and most important monasteries"
    },
    {
      name: "Tashiding",
      location: "West Sikkim",
      type: "Sacred",
      distance: "118 km", 
      rating: 4.7,
      description: "Sacred monastery with holy stupa and water"
    },
    {
      name: "Enchey Monastery",
      location: "East Sikkim",
      type: "Ancient",
      distance: "3 km",
      rating: 4.6,
      description: "Ancient monastery with stunning city views"
    }
  ];

  const routes = [
    {
      name: "Eastern Heritage Trail",
      duration: "2 days",
      monasteries: 8,
      distance: "120 km",
      highlights: ["Rumtek", "Enchey", "Ranka"]
    },
    {
      name: "Sacred Circuit",
      duration: "3 days", 
      monasteries: 12,
      distance: "180 km",
      highlights: ["Pemayangtse", "Tashiding", "Dubdi"]
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
              Interactive <span className="text-primary">Heritage Map</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate through Sikkim's monastery network with GPS-enabled routes, 
              transport integration, and curated heritage trails
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map Area */}
            <div className="lg:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      Heritage Map
                    </CardTitle>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <NavigationIcon className="w-4 h-4 mr-2" />
                        Get Directions
                      </Button>
                      <Button variant="outline" size="sm">
                        Street View
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Placeholder for interactive map */}
                  <div className="aspect-video bg-[var(--gradient-hero)] rounded-lg flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-heritage-blue/20 to-primary/20" />
                    <div className="text-center text-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Interactive Map Loading...</h3>
                      <p className="text-muted-foreground">
                        Explore 200+ monasteries across Sikkim
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Find Monasteries</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search monasteries..." className="pl-10" />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter Options
                  </Button>
                </CardContent>
              </Card>

              {/* Monastery Locations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monastery Locations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {monasteries.map((monastery, index) => (
                    <div key={index} className="flex items-start justify-between p-3 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{monastery.name}</h4>
                          <Badge variant="outline" className="text-xs">
                            {monastery.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">
                          {monastery.location}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {monastery.description}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Star className="w-3 h-3 mr-1 fill-heritage-gold text-heritage-gold" />
                            {monastery.rating}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {monastery.distance}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Curated Routes */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Curated Routes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {routes.map((route, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Route className="w-4 h-4 text-primary" />
                        <h4 className="font-medium text-sm">{route.name}</h4>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {route.duration}
                        </div>
                        <div>{route.monasteries} monasteries</div>
                        <div>{route.distance}</div>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {route.highlights.join(" • ")}
                      </p>
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        View Route
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InteractiveMap;