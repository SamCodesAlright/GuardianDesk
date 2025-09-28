import { MapPin, Search, Users, Wifi, WifiOff, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const touristLocationData = [
  {
    id: 1,
    name: "Arjun Mehta",
    passportId: "J8756432",
    lastLocation: "Tawang Monastery",
    coordinates: "27.5862°N, 91.8622°E",
    lastUpdate: "2 minutes ago",
    status: "online",
    battery: 85,
    riskLevel: "low"
  },
  {
    id: 2,
    name: "Priya Singh",
    passportId: "K9876543",
    lastLocation: "Cherrapunji Living Root Bridge",
    coordinates: "25.3000°N, 91.7000°E",
    lastUpdate: "15 minutes ago",
    status: "offline",
    battery: 23,
    riskLevel: "medium"
  },
  {
    id: 3,
    name: "Rohit Kumar",
    passportId: "L1234567",
    lastLocation: "Kaziranga National Park",
    coordinates: "26.5775°N, 93.1716°E",
    lastUpdate: "5 minutes ago",
    status: "online",
    battery: 67,
    riskLevel: "low"
  },
  {
    id: 4,
    name: "Anjali Sharma",
    passportId: "M7654321",
    lastLocation: "Majuli Island",
    coordinates: "27.0230°N, 94.2050°E",
    lastUpdate: "45 minutes ago",
    status: "offline",
    battery: 12,
    riskLevel: "high"
  }
];

const TrackLocationView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredTourists = touristLocationData.filter(tourist =>
    tourist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tourist.passportId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status: string) => {
    return status === "online" ? 
      <Wifi className="h-4 w-4 text-green-500" /> : 
      <WifiOff className="h-4 w-4 text-red-500" />;
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return "text-green-500";
    if (battery > 20) return "text-yellow-500";
    return "text-red-500";
  };

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "low":
        return "secondary";
      case "medium":
        return "outline";
      case "high":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const handleSendAlert = (touristName: string) => {
    toast({
      title: "Alert Sent",
      description: `Safety alert sent to ${touristName}`,
    });
  };

  const handleTrackRealTime = (touristName: string) => {
    toast({
      title: "Real-time Tracking Started",
      description: `Now tracking ${touristName} in real-time`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Tourist Location Tracking</h2>
          <p className="text-muted-foreground">Real-time GPS tracking of tourists in North Eastern India</p>
        </div>
        <Button>
          <MapPin className="h-4 w-4 mr-2" />
          View All on Map
        </Button>
      </div>

      {/* Search and Stats */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by name or passport ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">{touristLocationData.filter(t => t.status === "online").length}</p>
              <p className="text-xs text-muted-foreground">Online</p>
            </div>
          </Card>
          <Card className="p-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">{touristLocationData.filter(t => t.status === "offline").length}</p>
              <p className="text-xs text-muted-foreground">Offline</p>
            </div>
          </Card>
          <Card className="p-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-500">{touristLocationData.filter(t => t.riskLevel === "high").length}</p>
              <p className="text-xs text-muted-foreground">High Risk</p>
            </div>
          </Card>
        </div>
      </div>

      {/* North Eastern India Map */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            Live Tracking Map - North Eastern India
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 min-h-[400px] border-2 border-dashed border-gray-300">
            <div className="absolute inset-4 bg-white/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-semibold">Interactive Tracking Map</h3>
                <p className="text-muted-foreground">Real-time GPS locations of tourists across</p>
                <p className="text-muted-foreground">Assam, Meghalaya, Arunachal Pradesh, and neighboring states</p>
                
                {/* Tourist location dots */}
                <div className="mt-6 space-y-2">
                  {touristLocationData.map((tourist, index) => (
                    <div key={tourist.id} className="flex items-center justify-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${tourist.status === 'online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                      <span className="text-xs">{tourist.name} - {tourist.lastLocation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tourist Tracking Cards */}
      <div className="grid gap-4">
        {filteredTourists.map((tourist) => (
          <Card key={tourist.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{tourist.name}</h3>
                    <p className="text-sm text-muted-foreground">ID: {tourist.passportId}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(tourist.status)}
                  <Badge variant={getRiskColor(tourist.riskLevel)}>
                    {tourist.riskLevel} risk
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Current Location</h4>
                  <div className="space-y-1">
                    <p className="text-sm flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {tourist.lastLocation}
                    </p>
                    <p className="text-xs font-mono text-muted-foreground">{tourist.coordinates}</p>
                    <p className="text-xs flex items-center text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Last update: {tourist.lastUpdate}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Device Status</span>
                    <span className={`font-semibold ${tourist.status === 'online' ? 'text-green-500' : 'text-red-500'}`}>
                      {tourist.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Battery Level</span>
                    <span className={`font-semibold ${getBatteryColor(tourist.battery)}`}>
                      {tourist.battery}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleTrackRealTime(tourist.name)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Track Real-time
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleSendAlert(tourist.name)}
                >
                  Send Alert
                </Button>
                <Button size="sm" variant={tourist.riskLevel === "high" ? "destructive" : "secondary"}>
                  Emergency Contact
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrackLocationView;