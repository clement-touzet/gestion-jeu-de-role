import { RaceTable } from "@/app/db/schemas/race";
import { StatisticToRaceStatisticModifierTable } from "@/app/db/schemas/statisticToRaceStatisticModifier";
import { relations } from "drizzle-orm";
import { integer, pgTable, uuid } from "drizzle-orm/pg-core";

export const RaceStatisticModifierTable = pgTable("race_statisitic_modifier", {
  id: uuid("id").primaryKey().defaultRandom(),
  raceId: uuid("race_id")
    .notNull()
    .references(() => RaceTable.id),
  statisticValue: integer().notNull(),
  level: integer().notNull(),
});

// === RELATIONS ===

// many to many relation with "statistic" table
export const RaceStatisticModifierTableRelations = relations(
  RaceStatisticModifierTable,
  ({ many, one }) => ({
    statisticToRaceStatisticModifier: many(
      StatisticToRaceStatisticModifierTable
    ),
    race: one(RaceTable, {
      fields: [RaceStatisticModifierTable.raceId],
      references: [RaceTable.id],
    }),
  })
);

// === TYPES ===

export type RaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferSelect;
export type InsertRaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferInsert;
