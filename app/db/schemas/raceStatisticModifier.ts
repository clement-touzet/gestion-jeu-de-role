import { RaceTable } from "@/app/db/schemas/race";
import { StatisticModifierTable } from "@/app/db/schemas/statisticModifier";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const RaceStatisticModifierTable = pgTable(
  "race_statistic_modifier",
  {
    statisticModifierId: uuid("statistic_modifier_id")
      .notNull()
      .references(() => StatisticModifierTable.id, { onDelete: "cascade" }),
    raceId: uuid("race_id")
      .notNull()
      .references(() => RaceTable.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({ columns: [table.raceId, table.statisticModifierId] }),
  ]
);

// === RELATIONS ===

export const RaceStatisticModifierTableRelations = relations(
  RaceStatisticModifierTable,
  ({ one }) => ({
    race: one(RaceTable, {
      fields: [RaceStatisticModifierTable.raceId],
      references: [RaceTable.id],
    }),
    statisticModifier: one(StatisticModifierTable, {
      fields: [RaceStatisticModifierTable.statisticModifierId],
      references: [StatisticModifierTable.id],
    }),
  })
);

// === TYPES ===

export type RaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferSelect;
export type InsertRaceStatisticModifierTableType =
  typeof RaceStatisticModifierTable.$inferInsert;
