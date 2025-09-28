import { Users, AlertTriangle, ShieldAlert, FileSearch, FileText } from "lucide-react";
import StatCard from "./StatCard";
import TouristMap from "./TouristMap";
import AlertsPanel from "./AlertsPanel";
import TouristTable from "./TouristTable";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const DashboardView = () => {
  const { toast } = useToast();

  const handleGenerateEFIR = () => {
    toast({
      title: "Generating E-FIR",
      description: "Creating new Electronic First Information Report...",
    });
    
    setTimeout(() => {
      toast({
        title: "E-FIR Generated Successfully",
        description: "FIR-2024-004 has been created and submitted to local authorities.",
      });
    }, 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header with E-FIR Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tourist Safety Dashboard</h1>
          <p className="text-muted-foreground">North Eastern India Monitoring System</p>
        </div>
        <Button onClick={handleGenerateEFIR} className="bg-red-600 hover:bg-red-700">
          <FileText className="h-4 w-4 mr-2" />
          Generate E-FIR
        </Button>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Tourists Active"
          value="1,247"
          subtitle="+12% from yesterday"
          icon={Users}
          trend="up"
          variant="success"
        />
        <StatCard
          title="Alerts Today"
          value="23"
          subtitle="4 high priority"
          icon={AlertTriangle}
          variant="warning"
        />
        <StatCard
          title="High-Risk Entries"
          value="8"
          subtitle="2 in restricted zones"
          icon={ShieldAlert}
          variant="danger"
        />
        <StatCard
          title="Open Cases"
          value="3"
          subtitle="1 missing person"
          icon={FileSearch}
          variant="danger"
        />
      </div>

      {/* Map and Alerts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TouristMap />
        </div>
        <div>
          <AlertsPanel />
        </div>
      </div>

      {/* Tourist Table */}
      <TouristTable />
    </div>
  );
};

export default DashboardView;