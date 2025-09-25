import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Archive, 
  Download, 
  Eye, 
  FileText, 
  Image, 
  Music,
  BookOpen,
  Calendar
} from "lucide-react";
import manuscriptsImage from "@/assets/manuscripts.jpg";

const DigitalArchives = () => {
  const archives = [
    {
      id: 1,
      title: "Ancient Buddhist Manuscripts",
      type: "Manuscript",
      monastery: "Rumtek Monastery",
      century: "17th Century",
      pages: 45,
      views: 1250,
      description: "Rare collection of Tibetan Buddhist texts on philosophy and meditation practices written in traditional gold ink"
    },
    {
      id: 2, 
      title: "Monastery Construction Records",
      type: "Document",
      monastery: "Pemayangtse",
      century: "1705",
      pages: 12,
      views: 890,
      description: "Historical documents detailing the founding and construction of Pemayangtse monastery"
    },
    {
      id: 3,
      title: "Sacred Mural Paintings", 
      type: "Artwork",
      monastery: "Tashiding",
      century: "18th Century",
      pages: 28,
      views: 2100,
      description: "High resolution digital scans of intricate wall paintings depicting Buddhist deities and teachings"
    },
    {
      id: 4,
      title: "Ritual Ceremonial Texts",
      type: "Manuscript", 
      monastery: "Enchey",
      century: "19th Century",
      pages: 67,
      views: 762,
      description: "Detailed instructions for traditional Buddhist ceremonies and festivals practiced in Sikkim"
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
              Digital <span className="text-primary">Archives</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore thousands of digitally preserved manuscripts, murals, and historical 
              documents with AI-powered search and translation capabilities
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search manuscripts, murals, or documents..." 
                  className="pl-12 py-6 text-lg"
                />
              </div>
              
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="manuscripts">Manuscripts</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="artwork">Artwork</TabsTrigger>
                  <TabsTrigger value="audio">Audio</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Archives Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {archives.map((archive) => (
                <Card key={archive.id} className="overflow-hidden shadow-[var(--shadow-elevation)] hover:shadow-[var(--shadow-monastery)] transition-shadow group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={manuscriptsImage} 
                      alt={archive.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-background/90 text-foreground">
                        {archive.type === 'Manuscript' && <BookOpen className="w-3 h-3 mr-1" />}
                        {archive.type === 'Document' && <FileText className="w-3 h-3 mr-1" />}
                        {archive.type === 'Artwork' && <Image className="w-3 h-3 mr-1" />}
                        {archive.type === 'Audio' && <Music className="w-3 h-3 mr-1" />}
                        {archive.type}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-base leading-tight">{archive.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {archive.monastery} • {archive.century}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {archive.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{archive.pages} pages</span>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {archive.views} views
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Browse All */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                <Archive className="w-5 h-5 mr-2" />
                Browse All Archives (100+ Items)
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DigitalArchives;