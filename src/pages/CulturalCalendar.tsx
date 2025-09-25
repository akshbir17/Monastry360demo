import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Bell,
  CalendarDays,
  Plus
} from "lucide-react";

const CulturalCalendar = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Losar Festival",
      date: "February 15, 2025",
      time: "6:00 AM - 8:00 PM",
      monastery: "Rumtek Monastery", 
      participants: 2000,
      type: "Festival",
      description: "Tibetan New Year celebration with traditional dances, prayers, and feasts",
      featured: true
    },
    {
      id: 2,
      title: "Bumchu Festival",
      date: "March 8, 2025", 
      time: "9:00 AM - 6:00 PM",
      monastery: "Tashiding",
      participants: 1500,
      type: "Festival", 
      description: "Sacred water ceremony marking the end of winter",
      featured: true
    },
    {
      id: 3,
      title: "Morning Prayer Session",
      date: "Daily",
      time: "5:30 AM - 7:00 AM", 
      monastery: "Pemayangtse",
      participants: 50,
      type: "Daily Ritual",
      description: "Join the monks for daily morning prayers and meditation",
      featured: false
    }
  ];

  const dailyRituals = [
    {
      name: "Morning Prayer Session",
      time: "5:30 AM - 7:00 AM",
      monastery: "Pemayangtse",
      description: "Join the monks for daily morning prayers and meditation"
    },
    {
      name: "Evening Chanting",
      time: "6:00 PM - 7:30 PM", 
      monastery: "Enchey Monastery",
      description: "Traditional evening prayers and butter lamp offerings"
    }
  ];

  const festivalCategories = [
    { name: "Religious Festivals", count: 12, color: "bg-primary" },
    { name: "Cultural Events", count: 8, color: "bg-heritage-blue" },
    { name: "Meditation Workshops", count: 15, color: "bg-heritage-gold" },
    { name: "Seasonal Ceremonies", count: 6, color: "bg-heritage-red" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Header */}
        <section className="py-12 bg-[var(--gradient-mountain)]">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cultural <span className="text-primary">Calendar</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the rich cultural traditions of Sikkim through festivals, rituals, 
              and spiritual events happening across monasteries throughout the year
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button variant="outline">
                    <CalendarDays className="w-4 h-4 mr-2" />
                    View Full Calendar
                  </Button>
                </div>

                <div className="space-y-6">
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} className={`shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow ${event.featured ? 'border-primary' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-xl font-semibold">{event.title}</h3>
                              {event.featured && (
                                <Badge className="bg-primary text-primary-foreground">
                                  Featured
                                </Badge>
                              )}
                              <Badge variant="outline">
                                {event.type}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-2" />
                                {event.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-2" />
                                {event.time}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-2" />
                                {event.monastery}
                              </div>
                            </div>

                            <p className="text-muted-foreground mb-4">
                              {event.description}
                            </p>

                            <div className="flex items-center text-sm text-muted-foreground mb-4">
                              <Users className="w-4 h-4 mr-2" />
                              {event.participants.toLocaleString()} participants expected
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            Book Participation
                          </Button>
                          <Button size="sm" variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Add to Calendar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Daily Rituals */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-heritage-blue" />
                    Daily Rituals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dailyRituals.map((ritual, index) => (
                    <div key={index} className="p-3 border border-border rounded-lg">
                      <h4 className="font-medium text-sm mb-1">{ritual.name}</h4>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {ritual.time}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {ritual.monastery}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {ritual.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Festival Categories */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-heritage-gold" />
                    Festival Categories
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {festivalCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${category.color}`} />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Event Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2 text-heritage-red" />
                    Event Notifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get notified about upcoming festivals and special events at your favorite monasteries.
                  </p>
                  <Button className="w-full" variant="outline">
                    <Bell className="w-4 h-4 mr-2" />
                    Enable Notifications
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>This Month</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-center p-3 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground">Festivals</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-heritage-blue">24</div>
                    <div className="text-xs text-muted-foreground">Daily Rituals</div>
                  </div>
                  <div className="text-center p-3 border border-border rounded-lg">
                    <div className="text-2xl font-bold text-heritage-gold">15</div>
                    <div className="text-xs text-muted-foreground">Special Events</div>
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

export default CulturalCalendar;