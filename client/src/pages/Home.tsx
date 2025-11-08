import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StatCard from "@/components/StatCard";
import StrategyCard from "@/components/StrategyCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Trophy, Target, TrendingUp, Zap, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/PUBG_tactical_map_hero_image_9b570444.png";

export default function Home() {
  //TODO: Remove mock functionality - replace with real data
  const todayInHistory = {
    date: "March 15",
    year: "2023",
    version: "2.5.0",
    features: ["New weapon: FAMAS", "Erangel 2.0 released"],
  };

  const recentStrategies = [
    {
      id: 1,
      title: "Final Circle Positioning",
      category: "Late Game",
      content: "Stay on the edge of the circle with cover at your back for maximum tactical advantage.",
    },
    {
      id: 2,
      title: "Hot Drop Survival",
      category: "Early Game",
      content: "Prioritize finding weapons over looting when landing in hot zones.",
    },
  ];

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-2xl mx-auto">
          <div>
            <h1 className="text-2xl font-heading font-bold" data-testid="text-app-title">
              PUBG Tactical
            </h1>
            <p className="text-sm text-muted-foreground">AI-Powered Strategy Guide</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={heroImage}
          alt="PUBG Tactical Map"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/coach">
            <Button size="lg" className="w-full" data-testid="button-get-strategy">
              <Zap className="w-4 h-4 mr-2" />
              Get AI Strategy Advice
            </Button>
          </Link>
        </div>
      </div>

      <div className="p-4 space-y-6 max-w-2xl mx-auto">
        {/* This Day in PUBG History */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-heading">
              <Calendar className="w-5 h-5 text-primary" />
              This Day in PUBG History
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-lg font-heading font-bold" data-testid="text-history-date">
              {todayInHistory.date}, {todayInHistory.year}
            </p>
            <p className="text-sm font-medium">Update {todayInHistory.version}</p>
            <ul className="space-y-1">
              {todayInHistory.features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div>
          <h2 className="text-lg font-heading font-semibold mb-3">Your Performance</h2>
          <div className="grid grid-cols-2 gap-3">
            <StatCard
              icon={Trophy}
              label="Win Rate"
              value="68%"
              trend="+12% this week"
              testId="stat-winrate"
            />
            <StatCard
              icon={Target}
              label="K/D Ratio"
              value="3.2"
              trend="+0.4"
              testId="stat-kd"
            />
            <StatCard
              icon={TrendingUp}
              label="Top 10"
              value="142"
              trend="Last 30 days"
              testId="stat-top10"
            />
            <StatCard
              icon={Zap}
              label="Strategies"
              value="28"
              trend="Saved"
              testId="stat-strategies"
            />
          </div>
        </div>

        {/* Recent Strategies */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-heading font-semibold">Recent Strategies</h2>
            <Link href="/coach">
              <Button variant="ghost" size="sm" data-testid="link-view-all-strategies">
                View All
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentStrategies.map((strategy) => (
              <StrategyCard
                key={strategy.id}
                title={strategy.title}
                category={strategy.category}
                content={strategy.content}
                testId={`strategy-${strategy.id}`}
              />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/history">
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2" data-testid="button-quick-history">
              <Calendar className="w-6 h-6" />
              <span className="text-sm">Update History</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="outline" className="w-full h-auto py-4 flex-col gap-2" data-testid="button-quick-profile">
              <Target className="w-6 h-6" />
              <span className="text-sm">Edit Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
