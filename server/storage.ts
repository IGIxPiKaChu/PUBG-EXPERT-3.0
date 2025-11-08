import { type User, type InsertUser, type PubgUpdate, type PlayerProfile, type InsertPlayerProfile } from "@shared/schema";
import { pubgUpdatesData } from "./pubgData";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllPubgUpdates(): Promise<PubgUpdate[]>;
  getPubgUpdatesByYear(year: string): Promise<PubgUpdate[]>;
  searchPubgUpdates(query: string): Promise<PubgUpdate[]>;
  getTodayInHistory(month: number, day: number): Promise<PubgUpdate[]>;
  
  getPlayerProfile(id: string): Promise<PlayerProfile | undefined>;
  createPlayerProfile(profile: InsertPlayerProfile): Promise<PlayerProfile>;
  updatePlayerProfile(id: string, profile: Partial<InsertPlayerProfile>): Promise<PlayerProfile | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private profiles: Map<string, PlayerProfile>;

  constructor() {
    this.users = new Map();
    this.profiles = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllPubgUpdates(): Promise<PubgUpdate[]> {
    return pubgUpdatesData;
  }

  async getPubgUpdatesByYear(year: string): Promise<PubgUpdate[]> {
    return pubgUpdatesData.filter((update) => update.year === year);
  }

  async searchPubgUpdates(query: string): Promise<PubgUpdate[]> {
    const lowerQuery = query.toLowerCase();
    return pubgUpdatesData.filter(
      (update) =>
        update.versionName.toLowerCase().includes(lowerQuery) ||
        update.majorFeatures.some((f) => f.toLowerCase().includes(lowerQuery)) ||
        update.weaponChanges?.some((w) => w.toLowerCase().includes(lowerQuery)) ||
        update.mapChanges?.some((m) => m.toLowerCase().includes(lowerQuery))
    );
  }

  async getTodayInHistory(month: number, day: number): Promise<PubgUpdate[]> {
    // For demo, return a random update based on current date
    const index = (month + day) % pubgUpdatesData.length;
    return [pubgUpdatesData[index]];
  }

  async getPlayerProfile(id: string): Promise<PlayerProfile | undefined> {
    return this.profiles.get(id);
  }

  async createPlayerProfile(insertProfile: InsertPlayerProfile): Promise<PlayerProfile> {
    const id = randomUUID();
    const profile: PlayerProfile = { ...insertProfile, id };
    this.profiles.set(id, profile);
    return profile;
  }

  async updatePlayerProfile(
    id: string,
    updates: Partial<InsertPlayerProfile>
  ): Promise<PlayerProfile | undefined> {
    const profile = this.profiles.get(id);
    if (!profile) return undefined;
    
    const updated: PlayerProfile = { ...profile, ...updates };
    this.profiles.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
