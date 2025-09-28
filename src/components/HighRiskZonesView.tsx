import { Shield, AlertTriangle, MapPin, Clock, Phone, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const riskZonesData = [
  {
    id: 1,
    name: "Tawang Border Area",
    riskLevel: "critical",
    reason: "International border proximity, restricted military zone",
    touristsInZone: 3,
    lastIncident: "2 days ago",
    restrictions: ["Special permits required", "No night travel", "Escort mandatory"],
    coordinates: "27.5862°N, 91.8622°E"
  },
  {
    id: 2,
    name: "Cherrapunji Remote Hills",
    riskLevel: "high",
    reason: "Unstable terrain, frequent landslides during monsoon",
    touristsInZone: 8,
    lastIncident: "1 week ago",
    restrictions: ["Weather dependent access", "Local guide required", "Emergency kit mandatory"],
    coordinates: "25.3000°N, 91.7000°E"
  },
  {
    id: 3,
    name: "Kaziranga Buffer Zone",
    riskLevel: "medium",
    reason: "Wildlife encounters, dense forest coverage",
    touristsInZone: 15,
    lastIncident: "3 weeks ago",
    restrictions: ["Safari vehicle only", "Daylight hours only", "Stay on marked trails"],
    coordinates: "26.5775°N, 93.1716°E"
  },
  {
    id: 4,
    name: "Majuli Flood Plains",
    riskLevel: "medium",
    reason: "Seasonal flooding, river erosion",
    touristsInZone: 12,
    lastIncident: "1 month ago",
    restrictions: ["Monsoon season restricted", "Boat safety gear required", "Weather monitoring"],
    coordinates: "27.0230°N, 94.2050°E"
  }
];

const HighRiskZonesView = () => {
  const { toast } = useToast();
  
  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    return riskLevel === "critical" ? 
      <Shield className="h-5 w-5 text-destructive" /> : 
      <AlertTriangle className="h-5 w-5 text-warning" />;
  };

  const handleViewOnMap = (zoneName: string) => {
    toast({
      title: "Map View",
      description: `Focusing on ${zoneName} on the map`,
    });
  };

  const handleUpdateRestrictions = (zoneName: string) => {
    toast({
      title: "Restrictions Updated",
      description: `Safety restrictions have been updated for ${zoneName}`,
    });
  };

  const handleSendAlert = (zoneName: string, touristsCount: number) => {
    toast({
      title: "Alert Sent",
      description: `Safety alert sent to ${touristsCount} tourists in ${zoneName}`,
    });
  };

  const handleViewAllOnMap = () => {
    toast({
      title: "Map View",
      description: "Displaying all high-risk zones on the map",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">High-Risk Zone Management</h2>
          <p className="text-muted-foreground">Monitor and manage restricted areas for tourist safety</p>
        </div>
        <Button onClick={handleViewAllOnMap}>
          <MapPin className="h-4 w-4 mr-2" />
          View All on Map
        </Button>
      </div>

      {/* Risk Zone Cards */}
      <div className="grid gap-6">
        {riskZonesData.map((zone) => (
          <Card key={zone.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getRiskIcon(zone.riskLevel)}
                  <div>
                    <h3 className="text-lg font-semibold">{zone.name}</h3>
                    <p className="text-sm text-muted-foreground">{zone.coordinates}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getRiskColor(zone.riskLevel)}>
                    {zone.riskLevel} risk
                  </Badge>
                  <Badge variant="outline">
                    <Users className="h-3 w-3 mr-1" />
                    {zone.touristsInZone} tourists
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm mb-1">Risk Assessment</h4>
                <p className="text-sm text-muted-foreground">{zone.reason}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Safety Restrictions</h4>
                  <div className="space-y-1">
                    {zone.restrictions.map((restriction, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-warning" />
                        <span className="text-xs">{restriction}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Tourists in Zone</span>
                    <span className="font-semibold">{zone.touristsInZone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Last Incident</span>
                    <span className="text-sm flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {zone.lastIncident}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleViewOnMap(zone.name)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  View on Map
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleUpdateRestrictions(zone.name)}
                >
                  Update Restrictions
                </Button>
                <Button 
                  size="sm" 
                  variant={zone.riskLevel === "critical" ? "destructive" : "secondary"}
                  onClick={() => handleSendAlert(zone.name, zone.touristsInZone)}
                >
                  Send Alert to Tourists
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HighRiskZonesView;