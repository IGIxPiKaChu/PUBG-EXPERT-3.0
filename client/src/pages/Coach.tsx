import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StrategyCard from "@/components/StrategyCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Sparkles, Send, User, MapPin, Sword } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Coach() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  //TODO: Remove mock functionality - replace with real user profile data
  const userProfile = {
    playstyle: "Aggressive",
    favoriteWeapons: ["M416", "Kar98k"],
    preferredMaps: ["Erangel", "Miramar"],
    currentChallenges: ["Close combat", "Late game"],
  };

  //TODO: Remove mock functionality - replace with real AI responses
  const conversationHistory = [
    {
      id: 1,
      title: "Best Landing Spots for Aggressive Play",
      category: "Strategy",
      content: "For aggressive players on Erangel, consider hot dropping at Pochinki, School, or Military Base. These locations have high-tier loot and attract many players, giving you early combat opportunities to build momentum.",
    },
    {
      id: 2,
      title: "M416 Loadout Optimization",
      category: "Weapons",
      content: "For the M416, use a Red Dot or Holographic sight for close-medium range. Attach a Vertical Grip for better recoil control and a Compensator to reduce horizontal spray. This setup excels in aggressive pushes.",
    },
  ];

  const handleAskQuestion = () => {
    if (!question.trim()) return;
    
    setLoading(true);
    console.log("Asking AI:", question);
    
    //TODO: Remove mock functionality - implement real Gemini AI API call
    setTimeout(() => {
      setLoading(false);
      setQuestion("");
      toast({
        title: "Strategy generated",
        description: "Your personalized advice is ready",
      });
    }, 2000);
  };

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-2xl mx-auto">
          <div>
            <h1 className="text-2xl font-heading font-bold">AI Strategy Coach</h1>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Powered by Gemini AI
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {/* Player Profile Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <User className="w-4 h-4" />
              Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-normal">
                <User className="w-3 h-3 mr-1" />
                {userProfile.playstyle}
              </Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <Sword className="w-3 h-3" /> Favorite Weapons
              </p>
              <div className="flex flex-wrap gap-2">
                {userProfile.favoriteWeapons.map((weapon) => (
                  <Badge key={weapon} variant="secondary">
                    {weapon}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Preferred Maps
              </p>
              <div className="flex flex-wrap gap-2">
                {userProfile.preferredMaps.map((map) => (
                  <Badge key={map} variant="secondary">
                    {map}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Strategy Button */}
        <Button
          size="lg"
          className="w-full"
          onClick={() => {
            console.log("Getting quick strategy");
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              toast({
                title: "Strategy generated",
                description: "Based on your current profile and challenges",
              });
            }, 2000);
          }}
          disabled={loading}
          data-testid="button-quick-strategy"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          {loading ? "Generating..." : "Get Personalized Strategy"}
        </Button>

        {/* Ask Question */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Ask a Tactical Question</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Textarea
              placeholder="e.g., 'I'm in final circle with 3 enemies left, no cover. What should I do?'"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="min-h-24 resize-none"
              data-testid="input-question"
            />
            <Button
              className="w-full"
              onClick={handleAskQuestion}
              disabled={loading || !question.trim()}
              data-testid="button-ask-question"
            >
              <Send className="w-4 h-4 mr-2" />
              {loading ? "Analyzing..." : "Ask AI Coach"}
            </Button>
          </CardContent>
        </Card>

        {/* Conversation History */}
        <div>
          <h2 className="text-lg font-heading font-semibold mb-3">Recent Advice</h2>
          <div className="space-y-3">
            {conversationHistory.map((item) => (
              <StrategyCard
                key={item.id}
                title={item.title}
                category={item.category}
                content={item.content}
                testId={`strategy-${item.id}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
