import { Users, MapPin, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StatCard from "./StatCard";
import { useToast } from "@/hooks/use-toast";
import mapImage from "@/assets/northeast-india-map.png";

const clusterData = [
  {
    id: 1,
    location: "Shillong Tourist Circuit",
    touristCount: 247,
    averageStayDuration: "3.2 days",
    riskLevel: "low",
    popularSpots: ["Ward's Lake", "Elephant Falls", "Police Bazar"],
    coordinates: "25.5788°N, 91.8933°E",
    mapX: 45,
    mapY: 60
  },
  {
    id: 2,
    location: "Tawang Monastery Area",
    touristCount: 89,
    averageStayDuration: "2.1 days",
    riskLevel: "medium",
    popularSpots: ["Tawang Monastery", "Sela Pass", "War Memorial"],
    coordinates: "27.5862°N, 91.8622°E",
    mapX: 65,
    mapY: 25
  },
  {
    id: 3,
    location: "Kaziranga National Park",
    touristCount: 156,
    averageStayDuration: "1.8 days",
    riskLevel: "medium",
    popularSpots: ["Elephant Safari", "Jeep Safari", "Watch Towers"],
    coordinates: "26.5775°N, 93.1716°E",
    mapX: 30,
    mapY: 35
  },
  {
    id: 4,
    location: "Cherrapunji Region",
    touristCount: 78,
    averageStayDuration: "2.5 days",
    riskLevel: "high",
    popularSpots: ["Living Root Bridges", "Seven Sisters Falls", "Mawsmai Caves"],
    coordinates: "25.3000°N, 91.7000°E",
    mapX: 50,
    mapY: 75
  }
];

const TouristClustersView = () => {
  const { toast } = useToast();
  
  const getRiskBadgeVariant = (riskLevel: string) => {
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

  const handleViewOnMap = (clusterName: string) => {
    toast({
      title: "Map View",
      description: `Focusing on ${clusterName} cluster on the map`,
    });
  };

  const handleMonitorCluster = (clusterName: string) => {
    toast({
      title: "Monitoring Started",
      description: `Real-time monitoring activated for ${clusterName}`,
    });
  };

  const totalTourists = clusterData.reduce((sum, cluster) => sum + cluster.touristCount, 0);
  const averageDuration = (clusterData.reduce((sum, cluster) => sum + parseFloat(cluster.averageStayDuration), 0) / clusterData.length).toFixed(1);
  const highRiskClusters = clusterData.filter(cluster => cluster.riskLevel === "high").length;

  return (
    <div className="space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Clusters"
          value={clusterData.length.toString()}
          subtitle="Active tourist areas"
          icon={MapPin}
          variant="default"
        />
        <StatCard
          title="Total Tourists"
          value={totalTourists.toString()}
          subtitle="Across all clusters"
          icon={Users}
          variant="success"
        />
        <StatCard
          title="Average Stay"
          value={`${averageDuration} days`}
          subtitle="Per cluster visit"
          icon={TrendingUp}
          variant="default"
        />
        <StatCard
          title="High Risk Areas"
          value={highRiskClusters.toString()}
          subtitle="Requiring attention"
          icon={AlertTriangle}
          variant="danger"
        />
      </div>

      {/* North Eastern India Map with Clusters */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Tourist Clusters - North Eastern India</span>
            </div>
            <Button onClick={() => handleViewOnMap("All Clusters")}>
              <MapPin className="h-4 w-4 mr-2" />
              View Interactive Map
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <img 
              src={mapImage} 
              alt="Northeast India Map with Tourist Clusters" 
              className="w-full h-[400px] object-cover rounded-lg border"
            />
            
            {/* Tourist Cluster Dots */}
            {clusterData.map((cluster) => (
              <div
                key={cluster.id}
                className={`absolute w-8 h-8 rounded-full border-3 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold cursor-pointer transform hover:scale-110 transition-transform ${
                  cluster.riskLevel === 'low' ? 'bg-green-500' :
                  cluster.riskLevel === 'medium' ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{
                  left: `${cluster.mapX}%`,
                  top: `${cluster.mapY}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                title={`${cluster.location} - ${cluster.touristCount} tourists`}
                onClick={() => handleViewOnMap(cluster.location)}
              >
                {cluster.touristCount}
              </div>
            ))}
            
            {/* Legend */}
            <div className="absolute top-4 right-4">
              <div className="bg-white/95 p-3 rounded-lg shadow-md">
                <p className="text-xs font-semibold mb-2">Cluster Risk Levels</p>
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-xs">Low Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <span className="text-xs">Medium Risk</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-xs">High Risk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cluster Info Panel */}
            <div className="absolute bottom-4 left-4">
              <div className="bg-white/95 p-3 rounded-lg shadow-md max-w-xs">
                <p className="text-xs font-semibold mb-2">Active Tourist Clusters</p>
                <div className="space-y-1">
                  {clusterData.map((cluster) => (
                    <div key={cluster.id} className="text-xs flex justify-between">
                      <span>{cluster.location}</span>
                      <span className="font-medium">{cluster.touristCount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Cluster Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clusterData.map((cluster) => (
          <Card key={cluster.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-lg">{cluster.location}</span>
                </div>
                <Badge variant={getRiskBadgeVariant(cluster.riskLevel)}>
                  {cluster.riskLevel} risk
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Active Tourists</p>
                  <p className="text-2xl font-bold text-primary">{cluster.touristCount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Average Stay</p>
                  <p className="text-2xl font-bold">{cluster.averageStayDuration}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Popular Attractions</p>
                <div className="flex flex-wrap gap-1">
                  {cluster.popularSpots.map((spot, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {spot}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground">Coordinates</p>
                <p className="text-sm font-mono">{cluster.coordinates}</p>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleViewOnMap(cluster.location)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  View on Map
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleMonitorCluster(cluster.location)}
                >
                  Monitor Cluster
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TouristClustersView;