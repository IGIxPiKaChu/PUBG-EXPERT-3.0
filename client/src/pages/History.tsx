import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import UpdateCard from "@/components/UpdateCard";
import ThemeToggle from "@/components/ThemeToggle";
import { Search, Filter, Upload } from "lucide-react";
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

  //TODO: Remove mock functionality - replace with real data from backend
  const updates = [
    {
      id: 1,
      versionName: "2.5.0",
      releaseDate: "Mar 2024",
      year: "2024",
      majorFeatures: ["New Weapon: FAMAS", "Erangel 2.0", "Metro Royale Season 3"],
      weaponChanges: ["M416 recoil reduced", "AWM damage buffed"],
      mapChanges: ["Erangel visual overhaul", "New compounds added"],
    },
    {
      id: 2,
      versionName: "2.4.0",
      releaseDate: "Jan 2024",
      year: "2024",
      majorFeatures: ["Ranked Season 31", "New Mode: Arena Training", "UI Improvements"],
      weaponChanges: ["UMP45 fire rate increased"],
      mapChanges: [],
    },
    {
      id: 3,
      versionName: "2.3.0",
      releaseDate: "Nov 2023",
      year: "2023",
      majorFeatures: ["Livik 2.0", "New Vehicle: Monster Truck", "Season Updates"],
      weaponChanges: ["AKM damage increased", "M762 recoil adjusted"],
      mapChanges: ["Livik map redesign", "New areas added"],
    },
  ];

  const years = ["2024", "2023", "2022", "2021", "2020"];

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

  const filteredUpdates = updates.filter((update) => {
    const matchesSearch =
      !searchQuery ||
      update.versionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      update.majorFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesYear = !selectedYear || update.year === selectedYear;
    return matchesSearch && matchesYear;
  });

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
        {filteredUpdates.length === 0 ? (
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
              weaponChanges={update.weaponChanges}
              mapChanges={update.mapChanges}
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
