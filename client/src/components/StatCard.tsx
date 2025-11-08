import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
  testId?: string;
}

export default function StatCard({ icon: Icon, label, value, trend, testId }: StatCardProps) {
  return (
    <Card className="hover-elevate">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground mb-1">{label}</p>
            <p className="text-2xl font-heading font-bold" data-testid={testId}>
              {value}
            </p>
            {trend && (
              <p className="text-xs text-accent mt-1 font-medium">{trend}</p>
            )}
          </div>
          <div className="bg-primary/10 p-2 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
