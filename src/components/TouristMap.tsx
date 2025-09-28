import { MapPin, AlertTriangle, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mapImage from "@/assets/northeast-india-map.png";

const mockTouristLocations = [
  { id: 1, name: "Ramesh Kumar", location: "Shillong", lat: 25.5788, lng: 91.8933, status: "active", x: 45, y: 60 },
  { id: 2, name: "Anjali Sharma", location: "Guwahati", lat: 26.1445, lng: 91.7362, status: "alert", x: 35, y: 45 },
  { id: 3, name: "Vikram Singh", location: "Tawang", lat: 27.5862, lng: 91.8622, status: "active", x: 65, y: 25 },
  { id: 4, name: "Priya Patel", location: "Cherrapunji", lat: 25.3000, lng: 91.7000, status: "missing", x: 50, y: 75 },
  { id: 5, name: "Amit Das", location: "Kohima", lat: 25.6751, lng: 94.1086, status: "active", x: 75, y: 55 },
  { id: 6, name: "Ritu Bora", location: "Imphal", lat: 24.8170, lng: 93.9368, status: "alert", x: 80, y: 70 },
];

const geofenceZones = [
  { name: "Safe Zone - Shillong Central", color: "success", x: 40, y: 55, width: 15, height: 12 },
  { name: "Safe Zone - Guwahati City", color: "success", x: 30, y: 40, width: 18, height: 15 },
  { name: "Warning Zone - Kaziranga Buffer", color: "warning", x: 25, y: 30, width: 25, height: 20 },
  { name: "Restricted Zone - Border Area", color: "destructive", x: 60, y: 20, width: 20, height: 15 },
  { name: "Restricted Zone - Dense Forest", color: "destructive", x: 45, y: 70, width: 20, height: 18 },
  { name: "Warning Zone - Remote Hills", color: "warning", x: 70, y: 50, width: 15, height: 25 },
];

const riskZones = [
  { name: "Border Area - Tawang", severity: "high" },
  { name: "Dense Forest - Kaziranga", severity: "medium" },
  { name: "Remote Hills - Cherrapunji", severity: "high" },
];

const TouristMap = () => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-primary" />
          <span>Northeast India - Tourist Tracking</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <img 
            src={mapImage} 
            alt="Northeast India Map" 
            className="w-full h-[400px] object-cover rounded-lg border"
          />
          
          {/* Geofence Zones */}
          {geofenceZones.map((zone, index) => (
            <div
              key={index}
              className={`absolute border-2 border-dashed opacity-30 ${
                zone.color === 'success' ? 'border-success bg-success/10' :
                zone.color === 'warning' ? 'border-warning bg-warning/10' :
                'border-destructive bg-destructive/10'
              }`}
              style={{
                left: `${zone.x}%`,
                top: `${zone.y}%`,
                width: `${zone.width}%`,
                height: `${zone.height}%`,
              }}
              title={zone.name}
            />
          ))}
          
          {/* Tourist Location Dots */}
          {mockTouristLocations.map((tourist) => (
            <div
              key={tourist.id}
              className={`absolute w-4 h-4 rounded-full border-2 border-white shadow-lg animate-pulse ${
                tourist.status === 'active' ? 'bg-success' :
                tourist.status === 'alert' ? 'bg-warning' :
                'bg-destructive'
              }`}
              style={{
                left: `${tourist.x}%`,
                top: `${tourist.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              title={`${tourist.name} - ${tourist.location} (${tourist.status})`}
            />
          ))}
          
          {/* Tourist Location Info Panel */}
          <div className="absolute top-4 left-4 space-y-2 max-w-xs">
            {mockTouristLocations.slice(0, 3).map((tourist) => (
              <div key={tourist.id} className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${
                  tourist.status === 'active' ? 'bg-success animate-pulse' :
                  tourist.status === 'alert' ? 'bg-warning animate-pulse' :
                  'bg-destructive animate-pulse'
                }`} />
                <span className="text-xs font-medium bg-white/90 px-2 py-1 rounded shadow">
                  {tourist.name} - {tourist.location}
                </span>
              </div>
            ))}
            <div className="text-xs text-muted-foreground bg-white/90 px-2 py-1 rounded shadow">
              +{mockTouristLocations.length - 3} more tourists
            </div>
          </div>

          {/* Risk Zones Overlay */}
          <div className="absolute bottom-4 right-4">
            <div className="bg-white/95 p-3 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="h-4 w-4 text-destructive" />
                <span className="text-sm font-semibold">Risk Zones</span>
              </div>
              <div className="space-y-1">
                {riskZones.map((zone, index) => (
                  <div key={index} className="flex items-center justify-between space-x-2">
                    <span className="text-xs">{zone.name}</span>
                    <Badge variant={zone.severity === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                      {zone.severity}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="absolute top-4 right-4">
            <div className="bg-white/95 p-3 rounded-lg shadow-md">
              <p className="text-xs font-semibold mb-2">Status Legend</p>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-xs">Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <span className="text-xs">Alert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  <span className="text-xs">Missing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TouristMap;