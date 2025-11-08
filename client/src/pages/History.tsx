import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UpdateCard from "@/components/UpdateCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Search, Filter, Upload, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { PubgUpdate } from "@shared/schema";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function History() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [uploadDialogOpen, setUploadDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const { data: updates, isLoading } = useQuery<PubgUpdate[]>({
    queryKey: ["/api/pubg/updates", selectedYear],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedYear) params.append("year", selectedYear);
      const response = await fetch(`/api/pubg/updates?${params}`);
      if (!response.ok) throw new Error("Failed to fetch updates");
      return response.json();
    },
  });

  const years = useMemo(() => {
    if (!updates) return [];
    const uniqueYears = Array.from(new Set(updates.map(u => u.year)));
    return uniqueYears.sort((a, b) => parseInt(b) - parseInt(a));
  }, [updates]);

  const handleUpload = () => {
    //TODO: Remove mock functionality - implement real password check
    if (password === "PiKaChu") {
      setUploadDialogOpen(false);
      setPassword("");
      toast({
        title: "Upload ready",
        description: "Select a JSON file to upload",
      });
      // Trigger file input
      const input = document.createElement("input");
      input.type = "file";
      input.accept = ".json";
      input.onchange = (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (file) {
          console.log("File selected:", file.name);
          toast({
            title: "Upload started",
            description: `Uploading ${file.name}...`,
          });
          //TODO: Implement actual upload to backend
        }
      };
      input.click();
    } else {
      toast({
        title: "Incorrect password",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const filteredUpdates = useMemo(() => {
    if (!updates) return [];
    
    return updates.filter((update) => {
      const matchesSearch =
        !searchQuery ||
        update.versionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        update.majorFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        update.weaponChanges?.some((w) => w.toLowerCase().includes(searchQuery.toLowerCase())) ||
        update.mapChanges?.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [updates, searchQuery]);

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="p-4 max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold">Update History</h1>
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setUploadDialogOpen(true)}
                data-testid="button-admin-upload"
              >
                <Upload className="w-5 h-5" />
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search updates, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              data-testid="input-search-updates"
            />
          </div>

          {/* Year Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
            <Button
              size="sm"
              variant={selectedYear === null ? "default" : "outline"}
              onClick={() => setSelectedYear(null)}
              data-testid="filter-all-years"
            >
              All
            </Button>
            {years.map((year) => (
              <Button
                key={year}
                size="sm"
                variant={selectedYear === year ? "default" : "outline"}
                onClick={() => setSelectedYear(year)}
                data-testid={`filter-year-${year}`}
              >
                {year}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Updates List */}
      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredUpdates.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No updates found</p>
          </div>
        ) : (
          filteredUpdates.map((update) => (
            <UpdateCard
              key={update.id}
              versionName={update.versionName}
              releaseDate={update.releaseDate}
              majorFeatures={update.majorFeatures}
              weaponChanges={update.weaponChanges || []}
              mapChanges={update.mapChanges || []}
              testId={`update-card-${update.id}`}
            />
          ))
        )}
      </div>

      {/* Upload Dialog */}
      <Dialog open={uploadDialogOpen} onOpenChange={setUploadDialogOpen}>
        <DialogContent data-testid="dialog-admin-upload">
          <DialogHeader>
            <DialogTitle>Admin Upload</DialogTitle>
            <DialogDescription>
              Enter the admin password to upload update data
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                data-testid="input-admin-password"
                onKeyDown={(e) => e.key === "Enter" && handleUpload()}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setUploadDialogOpen(false);
                setPassword("");
              }}
              data-testid="button-cancel-upload"
            >
              Cancel
            </Button>
            <Button onClick={handleUpload} data-testid="button-confirm-upload">
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
