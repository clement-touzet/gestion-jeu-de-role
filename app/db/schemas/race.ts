import { BaseCaracteristicEffectTable } from "@/app/db/schemas/baseCaracteristicEffect";
import { RaceSkillTable } from "@/app/db/schemas/raceSkill";
import { RaceStatisticModifierTable } from "@/app/db/schemas/raceStatisticModifier";
import { relations, sql } from "drizzle-orm";
import { check, integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export const RaceTable = pgTable(
  "race",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 1000 }),
    baseCaracteristicBonusPoints: integer(
      "base_caracteristic_bonus_point"
    ).notNull(),
    baseCaracteristicPenaltyPoints: integer(
      "base_caracteristic_penalty_point"
    ).notNull(),
  },
  (table) => [
    check(
      "base_caracteristic_bonus_point_is_not_nagative",
      sql`${table.baseCaracteristicBonusPoints} >= 0`
    ),
    check(
      "base_caracteristic_penalty_point_is_not_nagative",
      sql`${table.baseCaracteristicPenaltyPoints} >= 0`
    ),
  ]
);

export const RaceRelations = relations(RaceTable, ({ many }) => ({
  baseCaracteristicEffect: many(BaseCaracteristicEffectTable),
  raceStatisticModifier: many(RaceStatisticModifierTable),
  raceSkills: many(RaceSkillTable),
}));

export type RaceType = typeof RaceTable.$inferSelect;
export type InsertRaceType = typeof RaceTable.$inferInsert;

export const raceSchema = createSelectSchema(RaceTable);
