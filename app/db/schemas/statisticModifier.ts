import { RaceStatisticModifierTable } from "@/app/db/schemas/raceStatisticModifier";
import { StatisticTable } from "@/app/db/schemas/statistic";
import { relations } from "drizzle-orm";
import { integer, pgTable, uuid } from "drizzle-orm/pg-core";

export const StatisticModifierTable = pgTable("statistic_modifier", {
  id: uuid("id").primaryKey().defaultRandom(),
  statisticId: uuid("statistic_id")
    .notNull()
    .references(() => StatisticTable.id, { onDelete: "cascade" }),
  statisticValue: integer("statistic_value").notNull(),
  level: integer("level").notNull(),
});

export const StatisticModifierRelations = relations(
  StatisticModifierTable,
  ({ one, many }) => ({
    statistic: one(StatisticTable, {
      fields: [StatisticModifierTable.statisticId],
      references: [StatisticTable.id],
    }),
    raceStatitic: many(RaceStatisticModifierTable),
  })
);

export type StatisticModifierType = typeof StatisticModifierTable.$inferSelect;
export type InsertStatisticModifierType =
  typeof StatisticModifierTable.$inferInsert;
