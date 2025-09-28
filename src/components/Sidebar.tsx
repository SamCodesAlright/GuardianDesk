import { 
  LayoutDashboard, 
  Users, 
  AlertTriangle, 
  ShieldAlert, 
  FileSearch, 
  Settings,
  MapPin
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeItem?: string;
  onItemSelect?: (item: string) => void;
}

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "clusters", label: "Tourist Clusters", icon: Users },
  { id: "alerts", label: "Live Alerts", icon: AlertTriangle },
  { id: "zones", label: "High-Risk Zones", icon: ShieldAlert },
  { id: "missing", label: "Missing Reports", icon: FileSearch },
  { id: "locations", label: "Track Locations", icon: MapPin },
];

const Sidebar = ({ activeItem = "dashboard", onItemSelect }: SidebarProps) => {
  return (
    <aside className="w-64 bg-dashboard-sidebar text-primary-foreground shadow-xl border-r border-border/20">
      <div className="p-6">
        <div className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onItemSelect?.(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                  isActive 
                    ? "bg-accent text-accent-foreground font-semibold shadow-md" 
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-primary-foreground/10 rounded-lg p-4">
          <p className="text-xs text-primary-foreground/60 mb-2">Emergency Contacts</p>
          <p className="text-sm font-medium">Police Control Room</p>
          <p className="text-sm text-accent">100 | 1073</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;