import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Sword } from "lucide-react";
import { useState } from "react";

interface UpdateCardProps {
  versionName: string;
  releaseDate: string;
  majorFeatures: string[];
  weaponChanges?: string[];
  mapChanges?: string[];
  testId?: string;
}

export default function UpdateCard({
  versionName,
  releaseDate,
  majorFeatures,
  weaponChanges = [],
  mapChanges = [],
  testId,
}: UpdateCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card 
      className="hover-elevate cursor-pointer" 
      onClick={() => setExpanded(!expanded)}
      data-testid={testId}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-heading">{versionName}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            <Calendar className="w-3 h-3 mr-1" />
            {releaseDate}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">Major Features</p>
          <div className="flex flex-wrap gap-2">
            {majorFeatures.slice(0, expanded ? undefined : 2).map((feature, i) => (
              <Badge key={i} variant="outline" data-testid={`${testId}-feature-${i}`}>
                {feature}
              </Badge>
            ))}
            {!expanded && majorFeatures.length > 2 && (
              <Badge variant="outline">+{majorFeatures.length - 2} more</Badge>
            )}
          </div>
        </div>

        {expanded && (
          <>
            {weaponChanges.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <Sword className="w-4 h-4" /> Weapon Changes
                </p>
                <div className="flex flex-wrap gap-2">
                  {weaponChanges.map((change, i) => (
                    <Badge key={i} variant="default" className="bg-chart-2">
                      {change}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {mapChanges.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> Map Changes
                </p>
                <div className="flex flex-wrap gap-2">
                  {mapChanges.map((change, i) => (
                    <Badge key={i} variant="default" className="bg-chart-1">
                      {change}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
        
        <p className="text-xs text-muted-foreground text-center pt-2">
          {expanded ? "Tap to collapse" : "Tap to expand"}
        </p>
      </CardContent>
    </Card>
  );
}
