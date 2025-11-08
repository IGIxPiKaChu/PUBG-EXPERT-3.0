import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // PUBG Updates API
  app.get("/api/pubg/updates", async (req, res) => {
    try {
      const { year, search } = req.query;
      
      let updates;
      if (search && typeof search === "string") {
        updates = await storage.searchPubgUpdates(search);
      } else if (year && typeof year === "string") {
        updates = await storage.getPubgUpdatesByYear(year);
      } else {
        updates = await storage.getAllPubgUpdates();
      }
      
      res.json(updates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch updates" });
    }
  });

  app.get("/api/pubg/today-in-history", async (req, res) => {
    try {
      const now = new Date();
      const updates = await storage.getTodayInHistory(now.getMonth() + 1, now.getDate());
      res.json(updates);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch today in history" });
    }
  });

  // Player Profile API
  app.get("/api/profile/:id", async (req, res) => {
    try {
      const profile = await storage.getPlayerProfile(req.params.id);
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  app.post("/api/profile", async (req, res) => {
    try {
      const profile = await storage.createPlayerProfile(req.body);
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to create profile" });
    }
  });

  app.patch("/api/profile/:id", async (req, res) => {
    try {
      const profile = await storage.updatePlayerProfile(req.params.id, req.body);
      if (!profile) {
        return res.status(404).json({ error: "Profile not found" });
      }
      res.json(profile);
    } catch (error) {
      res.status(500).json({ error: "Failed to update profile" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
