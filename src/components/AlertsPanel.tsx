import { AlertTriangle, Clock, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const mockAlerts = [
  {
    id: 1,
    type: "panic",
    message: "Panic button pressed in Shillong",
    tourist: "Ramesh Kumar",
    location: "Shillong Market Area",
    time: "2 minutes ago",
    severity: "high",
    contact: "+91 9XXXXXX123"
  },
  {
    id: 2,
    type: "zone",
    message: "Tourist entered restricted zone",
    tourist: "Anjali Sharma",
    location: "Border Area - Tawang",
    time: "15 minutes ago",
    severity: "high",
    contact: "+91 9XXXXXX456"
  },
  {
    id: 3,
    type: "deviation",
    message: "Route deviation detected",
    tourist: "Vikram Singh",
    location: "Kaziranga Forest",
    time: "32 minutes ago",
    severity: "medium",
    contact: "+91 9XXXXXX789"
  },
  {
    id: 4,
    type: "missing",
    message: "No location update for 4 hours",
    tourist: "Priya Patel",
    location: "Last seen: Cherrapunji",
    time: "4 hours ago",
    severity: "critical",
    contact: "+91 9XXXXXX321"
  }
];

const AlertsPanel = () => {
  const [callingAlerts, setCallingAlerts] = useState<Set<number>>(new Set());
  const [respondingAlerts, setRespondingAlerts] = useState<Set<number>>(new Set());

  const handleCall = (alertId: number, touristName: string, contact: string) => {
    setCallingAlerts(prev => new Set(prev).add(alertId));
    toast({
      title: "Calling Tourist",
      description: `Connecting to ${touristName} at ${contact}...`,
    });

    // Simulate call duration
    setTimeout(() => {
      setCallingAlerts(prev => {
        const newSet = new Set(prev);
        newSet.delete(alertId);
        return newSet;
      });
      toast({
        title: "Call Connected",
        description: `Successfully connected to ${touristName}. Call in progress.`,
      });
    }, 3000);
  };

  const handleRespond = (alertId: number, touristName: string, severity: string) => {
    setRespondingAlerts(prev => new Set(prev).add(alertId));
    toast({
      title: "Dispatching Response",
      description: `${severity === "critical" ? "Emergency response" : "Security team"} dispatched to ${touristName}'s location.`,
    });

    // Simulate response dispatch
    setTimeout(() => {
      setRespondingAlerts(prev => {
        const newSet = new Set(prev);
        newSet.delete(alertId);
        return newSet;
      });
      toast({
        title: "Response Deployed",
        description: `Response team is now en route to assist ${touristName}.`,
      });
    }, 2500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
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

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "panic":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "zone":
        return <MapPin className="h-4 w-4 text-warning" />;
      case "deviation":
        return <MapPin className="h-4 w-4 text-warning" />;
      case "missing":
        return <Clock className="h-4 w-4 text-destructive" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>Live Alerts</span>
          </div>
          <Badge variant="destructive" className="animate-pulse">
            {mockAlerts.length} Active
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockAlerts.map((alert) => (
            <div key={alert.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  {getAlertIcon(alert.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="font-semibold text-sm">{alert.tourist}</p>
                      <Badge variant={getSeverityColor(alert.severity)} className="text-xs">
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-foreground mb-1">{alert.message}</p>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{alert.time}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="text-xs"
                    onClick={() => handleCall(alert.id, alert.tourist, alert.contact)}
                    disabled={callingAlerts.has(alert.id)}
                  >
                    <Phone className="h-3 w-3 mr-1" />
                    {callingAlerts.has(alert.id) ? "Calling..." : "Call"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant={alert.severity === "critical" ? "destructive" : "default"}
                    className="text-xs"
                    onClick={() => handleRespond(alert.id, alert.tourist, alert.severity)}
                    disabled={respondingAlerts.has(alert.id)}
                  >
                    {respondingAlerts.has(alert.id) ? "Dispatching..." : "Respond"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;