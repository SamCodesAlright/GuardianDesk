import { Eye, MapPin, FileText, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockTourists = [
  {
    id: "T001",
    name: "Ramesh Kumar",
    idType: "Passport",
    idNumber: "A2345678",
    destination: "Meghalaya Trip",
    emergencyContact: "Priya Kumar",
    phone: "+91 9XXXXXX123",
    status: "ACTIVE",
    lastLocation: "Shillong",
    checkIn: "2024-01-15",
  },
  {
    id: "T002", 
    name: "Anjali Sharma",
    idType: "Aadhaar",
    idNumber: "1234-5678-9012",
    destination: "Assam Wildlife Tour",
    emergencyContact: "Rajiv Sharma",
    phone: "+91 9XXXXXX456",
    status: "ALERT",
    lastLocation: "Guwahati",
    checkIn: "2024-01-14",
  },
  {
    id: "T003",
    name: "Vikram Singh",
    idType: "Passport",
    idNumber: "B9876543",
    destination: "Arunachal Pradesh Trek",
    emergencyContact: "Sunita Singh",
    phone: "+91 9XXXXXX789",
    status: "ACTIVE",
    lastLocation: "Tawang",
    checkIn: "2024-01-16",
  },
  {
    id: "T004",
    name: "Priya Patel",
    idType: "Aadhaar", 
    idNumber: "9876-5432-1098",
    destination: "Cherrapunji Exploration",
    emergencyContact: "Amit Patel",
    phone: "+91 9XXXXXX321",
    status: "MISSING",
    lastLocation: "Cherrapunji",
    checkIn: "2024-01-13",
  },
  {
    id: "T005",
    name: "Arjun Reddy",
    idType: "Passport",
    idNumber: "C1122334",
    destination: "Manipur Cultural Tour",
    emergencyContact: "Kavya Reddy",
    phone: "+91 9XXXXXX654",
    status: "ACTIVE",
    lastLocation: "Imphal",
    checkIn: "2024-01-17",
  },
];

const TouristTable = () => {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "default";
      case "ALERT":
        return "secondary";
      case "MISSING":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "text-success";
      case "ALERT":
        return "text-warning";
      case "MISSING":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Registered Tourists - Northeast India</span>
          <Badge variant="outline">{mockTourists.length} Active Records</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tourist ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>ID Type</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Emergency Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Location</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTourists.map((tourist) => (
                <TableRow key={tourist.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{tourist.id}</TableCell>
                  <TableCell className="font-semibold">{tourist.name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {tourist.idType}
                    </Badge>
                  </TableCell>
                  <TableCell className="max-w-[200px]">
                    <div>
                      <p className="font-medium text-sm">{tourist.destination}</p>
                      <p className="text-xs text-muted-foreground">Check-in: {tourist.checkIn}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="text-sm font-medium">{tourist.emergencyContact}</p>
                      <p className="text-xs text-muted-foreground">{tourist.phone}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={getStatusVariant(tourist.status)}
                      className={getStatusColor(tourist.status)}
                    >
                      {tourist.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{tourist.lastLocation}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex space-x-1 justify-end">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Eye className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <MapPin className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                        <Phone className="h-3 w-3" />
                      </Button>
                      {tourist.status === "MISSING" && (
                        <Button size="sm" variant="destructive" className="text-xs px-2">
                          <FileText className="h-3 w-3 mr-1" />
                          E-FIR
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default TouristTable;