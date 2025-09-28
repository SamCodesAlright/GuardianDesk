import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DashboardView from "@/components/DashboardView";
import TouristClustersView from "@/components/TouristClustersView";
import AlertsPanel from "@/components/AlertsPanel";
import HighRiskZonesView from "@/components/HighRiskZonesView";
import MissingReportsView from "@/components/MissingReportsView";
import TrackLocationView from "@/components/TrackLocationView";

const Index = () => {
  const [activeView, setActiveView] = useState("dashboard");

  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return <DashboardView />;
      case "clusters":
        return <TouristClustersView />;
      case "alerts":
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Detailed Alerts Management</h2>
              <p className="text-muted-foreground">Comprehensive alert monitoring and response system</p>
            </div>
            <AlertsPanel />
          </div>
        );
      case "zones":
        return <HighRiskZonesView />;
      case "missing":
        return <MissingReportsView />;
      case "locations":
        return <TrackLocationView />;
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar activeItem={activeView} onItemSelect={setActiveView} />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
