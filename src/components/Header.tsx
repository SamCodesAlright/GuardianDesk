import { Shield, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-dashboard-header text-primary-foreground shadow-lg border-b-4 border-accent">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-10 w-10 text-accent" />
              <div>
                <h1 className="text-xl font-bold">Government of India</h1>
                <p className="text-sm text-primary-foreground/80">Tourism Safety Monitoring System</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <Bell className="h-5 w-5 mr-2" />
              Alerts
              <span className="ml-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">3</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <User className="h-5 w-5 mr-2" />
              Inspector Kumar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;