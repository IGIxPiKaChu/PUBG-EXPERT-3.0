import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy, Bookmark } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface StrategyCardProps {
  title: string;
  content: string;
  category?: string;
  testId?: string;
}

export default function StrategyCard({ title, content, category, testId }: StrategyCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied to clipboard",
      description: "Strategy copied successfully",
    });
  };

  return (
    <Card className="border-l-4 border-l-accent" data-testid={testId}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Strategy
              </Badge>
              {category && <Badge variant="outline">{category}</Badge>}
            </div>
            <CardTitle className="text-base font-heading">{title}</CardTitle>
          </div>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              setBookmarked(!bookmarked);
              toast({
                title: bookmarked ? "Removed from bookmarks" : "Added to bookmarks",
              });
            }}
            data-testid={`${testId}-bookmark`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current text-accent" : ""}`} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm leading-relaxed" data-testid={`${testId}-content`}>
          {content}
        </p>
        <Button
          size="sm"
          variant="outline"
          className="w-full"
          onClick={handleCopy}
          data-testid={`${testId}-copy`}
        >
          <Copy className="w-3 h-3 mr-2" />
          Copy Strategy
        </Button>
      </CardContent>
    </Card>
  );
}
