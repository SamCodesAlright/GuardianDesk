import { FileText, User, Clock, MapPin, Phone, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const missingReports = [
  {
    id: "FIR-2024-001",
    touristName: "Priya Patel",
    age: 28,
    nationality: "Indian",
    passportId: "J8756432",
    lastSeenLocation: "Cherrapunji Living Root Bridge",
    lastSeenTime: "4 hours ago",
    reportedBy: "Travel Group Leader - Amit Kumar",
    contactNumber: "+91 9XXXXXX321",
    status: "active",
    priority: "high",
    searchTeamsDeployed: 2,
    lastKnownCoordinates: "25.3000°N, 91.7000°E"
  },
  {
    id: "FIR-2024-002",
    touristName: "Rohit Sharma",
    age: 35,
    nationality: "Indian",
    passportId: "K9876543",
    lastSeenLocation: "Tawang War Memorial",
    lastSeenTime: "12 hours ago",
    reportedBy: "Hotel Manager - Dolma Lhamo",
    contactNumber: "+91 9XXXXXX654",
    status: "investigating",
    priority: "critical",
    searchTeamsDeployed: 4,
    lastKnownCoordinates: "27.5862°N, 91.8622°E"
  },
  {
    id: "FIR-2024-003",
    touristName: "Anjali Devi",
    age: 24,
    nationality: "Indian",
    passportId: "L1234567",
    lastSeenLocation: "Kaziranga Elephant Safari",
    lastSeenTime: "8 hours ago",
    reportedBy: "Safari Guide - Ranjan Das",
    contactNumber: "+91 9XXXXXX789",
    status: "resolved",
    priority: "medium",
    searchTeamsDeployed: 1,
    lastKnownCoordinates: "26.5775°N, 93.1716°E"
  }
];

const MissingReportsView = () => {
  const [generatingFIR, setGeneratingFIR] = useState<Set<string>>(new Set());
  const { toast } = useToast();

  const generateEFIR = (reportId: string, touristName: string) => {
    setGeneratingFIR(prev => new Set(prev).add(reportId));
    toast({
      title: "Generating E-FIR",
      description: `Creating electronic FIR for ${touristName}...`,
    });

    setTimeout(() => {
      setGeneratingFIR(prev => {
        const newSet = new Set(prev);
        newSet.delete(reportId);
        return newSet;
      });
      toast({
        title: "E-FIR Generated",
        description: `Electronic FIR ${reportId} has been created and submitted to local police station.`,
      });
    }, 3000);
  };

  const handleTrackLocation = (touristName: string) => {
    toast({
      title: "Tracking Activated",
      description: `GPS tracking initiated for ${touristName}`,
    });
  };

  const handleContactReporter = (reporterName: string, contactNumber: string) => {
    toast({
      title: "Calling Reporter",
      description: `Initiating call to ${reporterName} at ${contactNumber}`,
    });
  };

  const handleDeploySearchTeam = (touristName: string, location: string) => {
    toast({
      title: "Search Team Deployed",
      description: `Emergency search team dispatched to ${location} for ${touristName}`,
    });
  };

  const handleCreateNewReport = () => {
    toast({
      title: "New Report",
      description: "Opening new missing person report form...",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "destructive";
      case "investigating":
        return "secondary";
      case "resolved":
        return "outline";
      default:
        return "secondary";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Missing Person Reports & E-FIR</h2>
          <p className="text-muted-foreground">Track missing tourists and manage electronic FIR submissions</p>
        </div>
        <Button onClick={handleCreateNewReport}>
          <FileText className="h-4 w-4 mr-2" />
          Create New Report
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <div>
                <p className="text-2xl font-bold">{missingReports.filter(r => r.status === "active").length}</p>
                <p className="text-xs text-muted-foreground">Active Cases</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-warning" />
              <div>
                <p className="text-2xl font-bold">{missingReports.filter(r => r.status === "investigating").length}</p>
                <p className="text-xs text-muted-foreground">Under Investigation</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-success" />
              <div>
                <p className="text-2xl font-bold">{missingReports.filter(r => r.status === "resolved").length}</p>
                <p className="text-xs text-muted-foreground">Resolved</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <p className="text-2xl font-bold">6.5h</p>
                <p className="text-xs text-muted-foreground">Avg Response Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Missing Reports */}
      <div className="space-y-4">
        {missingReports.map((report) => (
          <Card key={report.id} className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">{report.touristName}</h3>
                    <p className="text-sm text-muted-foreground">FIR ID: {report.id}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={getPriorityColor(report.priority)}>
                    {report.priority} priority
                  </Badge>
                  <Badge variant={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Personal Information</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Age: {report.age} years</p>
                      <p>Nationality: {report.nationality}</p>
                      <p>ID: {report.passportId}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Last Known Location</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {report.lastSeenLocation}
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {report.lastSeenTime}
                      </p>
                      <p className="font-mono text-xs">{report.lastKnownCoordinates}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Reported By</p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>{report.reportedBy}</p>
                      <p className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {report.contactNumber}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium">Search Operations</p>
                    <div className="text-sm text-muted-foreground">
                      <p>{report.searchTeamsDeployed} teams deployed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => generateEFIR(report.id, report.touristName)}
                  disabled={generatingFIR.has(report.id)}
                >
                  <FileText className="h-3 w-3 mr-1" />
                  {generatingFIR.has(report.id) ? "Generating E-FIR..." : "Generate E-FIR"}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleTrackLocation(report.touristName)}
                >
                  <MapPin className="h-3 w-3 mr-1" />
                  Track Location
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => handleContactReporter(report.reportedBy.split(' - ')[1] || report.reportedBy, report.contactNumber)}
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Contact Reporter
                </Button>
                {report.status === "active" && (
                  <Button 
                    size="sm" 
                    variant="destructive"
                    onClick={() => handleDeploySearchTeam(report.touristName, report.lastSeenLocation)}
                  >
                    Deploy Search Team
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MissingReportsView;