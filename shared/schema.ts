import { sql } from "drizzle-orm";
import { pgTable, text, varchar, jsonb, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const pubgUpdates = pgTable("pubg_updates", {
  id: integer("id").primaryKey(),
  versionName: text("version_name").notNull(),
  releaseDate: text("release_date").notNull(),
  year: text("year").notNull(),
  majorFeatures: jsonb("major_features").notNull().$type<string[]>(),
  weaponChanges: jsonb("weapon_changes").$type<string[]>(),
  mapChanges: jsonb("map_changes").$type<string[]>(),
  vehicleChanges: jsonb("vehicle_changes").$type<string[]>(),
  metaSummary: text("meta_summary"),
});

export const playerProfiles = pgTable("player_profiles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  currentSeason: text("current_season").notNull(),
  playstyle: text("playstyle").notNull(),
  favoriteWeapons: jsonb("favorite_weapons").notNull().$type<string[]>(),
  preferredMaps: jsonb("preferred_maps").notNull().$type<string[]>(),
  currentChallenges: jsonb("current_challenges").notNull().$type<string[]>(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPubgUpdateSchema = createInsertSchema(pubgUpdates).omit({
  id: true,
});

export const insertPlayerProfileSchema = createInsertSchema(playerProfiles).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type PubgUpdate = typeof pubgUpdates.$inferSelect;
export type InsertPubgUpdate = z.infer<typeof insertPubgUpdateSchema>;

export type PlayerProfile = typeof playerProfiles.$inferSelect;
export type InsertPlayerProfile = z.infer<typeof insertPlayerProfileSchema>;
