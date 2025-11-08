import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ThemeToggle from "@/components/ThemeToggle";
import { Shield, Upload, FileJson, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { toast } = useToast();

  const handleLogin = () => {
    //TODO: Remove mock functionality - implement real backend password verification
    if (password === "PiKaChu") {
      setAuthenticated(true);
      setPassword("");
      toast({
        title: "Authentication successful",
        description: "You can now upload update data",
      });
    } else {
      toast({
        title: "Authentication failed",
        description: "Incorrect password",
        variant: "destructive",
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith(".json")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a JSON file",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    //TODO: Remove mock functionality - implement real file upload to backend
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          toast({
            title: "Upload successful",
            description: "Update data has been imported",
          });
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Read and validate file
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        console.log("JSON data:", json);
        //TODO: Validate JSON schema with Zod
        //TODO: Send to backend API
      } catch (error) {
        clearInterval(interval);
        setUploading(false);
        setUploadProgress(0);
        toast({
          title: "Invalid JSON",
          description: "The file contains invalid JSON data",
          variant: "destructive",
        });
      }
    };
    reader.readAsText(file);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-2xl font-heading">Admin Access</CardTitle>
            <CardDescription>
              Enter the admin password to upload update data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-password">Password</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                data-testid="input-admin-password"
              />
            </div>
            <Button
              className="w-full"
              onClick={handleLogin}
              data-testid="button-admin-login"
            >
              Authenticate
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pb-20 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between p-4 max-w-2xl mx-auto">
          <div>
            <h1 className="text-2xl font-heading font-bold flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Admin Panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Authenticated as Administrator
            </p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="p-4 space-y-4 max-w-2xl mx-auto">
        {/* Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Upload Update Data
            </CardTitle>
            <CardDescription>
              Upload a JSON file containing PUBG Mobile update history (2018-2025)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover-elevate">
              <input
                type="file"
                id="file-upload"
                accept=".json"
                onChange={handleFileUpload}
                className="hidden"
                disabled={uploading}
                data-testid="input-file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <FileJson className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Click to upload JSON file</p>
                  <p className="text-sm text-muted-foreground">
                    or drag and drop
                  </p>
                </div>
              </label>
            </div>

            {uploading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uploading...</span>
                  <span className="font-medium">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} data-testid="progress-upload" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">JSON Format Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Required Fields</p>
                <p className="text-muted-foreground">
                  versionName, releaseDate, majorFeatures
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Optional Fields</p>
                <p className="text-muted-foreground">
                  weaponChanges, mapChanges, vehicleChanges, metaSummary
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Validation</p>
                <p className="text-muted-foreground">
                  File will be validated before upload. Invalid data will be rejected.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            setAuthenticated(false);
            toast({
              title: "Logged out",
              description: "You have been logged out of admin panel",
            });
          }}
          data-testid="button-admin-logout"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
