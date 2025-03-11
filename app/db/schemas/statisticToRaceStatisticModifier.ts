import { RaceStatisticModifierTable } from "@/app/db/schemas/raceStatisticModifier";
import { StatisticTable } from "@/app/db/schemas/statistic";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

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
