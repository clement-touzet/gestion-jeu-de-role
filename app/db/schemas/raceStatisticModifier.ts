import { RaceTable } from "@/app/db/schemas/race";
import { StatisticTable } from "@/app/db/schemas/statistic";
import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const RaceStatisticModifierTable = pgTable("race_statisitic_modifier", {
  id: uuid("id").primaryKey().defaultRandom(),
  raceId: uuid("race_id")
    .notNull()
    .references(() => RaceTable.id),
  statisticValue: integer().notNull(),
  level: integer().notNull(),
});

export type RaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferSelect;
export type InsertRaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferInsert;

// many to many relation with "statistic" table
export const RaceStatisticModifierTableRelations = relations(
  RaceStatisticModifierTable,
  ({ many }) => ({
    statisticToRaceStatisticModifier: many(
      StatisticToRaceStatisticModifierTable
    ),
  })
);

// table to handle many to many relationship between "statistic" table and "race_statisitic_modifier"
export const StatisticToRaceStatisticModifierTable = pgTable(
  "statistic_to_race_statistic_modifier",
  {
    statisticId: uuid("statistic_id")
      .notNull()
      .references(() => StatisticTable.id),
    raceStatisticModifierId: uuid("race_statistic_modifier_id")
      .notNull()
      .references(() => RaceStatisticModifierTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.statisticId, table.raceStatisticModifierId],
    }),
  ]
);

export const StatisticToRaceStatisticModifierTableRelations = relations(
  StatisticToRaceStatisticModifierTable,
  ({ one }) => ({
    statistic: one(StatisticTable, {
      fields: [StatisticToRaceStatisticModifierTable.statisticId],
      references: [StatisticTable.id],
    }),
    raceStatisticModifier: one(RaceStatisticModifierTable, {
      fields: [StatisticToRaceStatisticModifierTable.raceStatisticModifierId],
      references: [RaceStatisticModifierTable.id],
    }),
  })
);
