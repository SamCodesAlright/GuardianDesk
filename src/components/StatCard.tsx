import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: "up" | "down" | "neutral";
  variant?: "default" | "success" | "warning" | "danger";
}

const StatCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend = "neutral",
  variant = "default" 
}: StatCardProps) => {
  const variantStyles = {
    default: "border-border bg-card",
    success: "border-success/30 bg-success/5",
    warning: "border-warning/30 bg-warning/5",
    danger: "border-destructive/30 bg-destructive/5"
  };

  const iconStyles = {
    default: "text-primary",
    success: "text-success",
    warning: "text-warning",
    danger: "text-destructive"
  };

  return (
    <Card className={cn("shadow-sm hover:shadow-md transition-shadow", variantStyles[variant])}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground">{value}</p>
            {subtitle && (
              <p className={cn(
                "text-sm font-medium",
                trend === "up" ? "text-success" : 
                trend === "down" ? "text-destructive" : "text-muted-foreground"
              )}>
                {subtitle}
              </p>
            )}
          </div>
          <Icon className={cn("h-8 w-8", iconStyles[variant])} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;