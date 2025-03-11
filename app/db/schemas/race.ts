import { BaseCaracteristicEffectTable } from "@/app/db/schemas/baseCaracteristicEffect";
import { RaceStatisticModifierTable } from "@/app/db/schemas/raceStatisticModifier";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const RaceTable = pgTable("race", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
});

export const RaceRelations = relations(RaceTable, ({ many }) => ({
  baseCaracteristicEffect: many(BaseCaracteristicEffectTable),
  raceStatisticModifier: many(RaceStatisticModifierTable),
}));

export type RaceType = typeof RaceTable.$inferSelect;
export type InsertRaceType = typeof RaceTable.$inferInsert;
