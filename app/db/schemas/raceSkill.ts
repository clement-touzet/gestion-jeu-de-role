import { RaceTable } from "@/app/db/schemas/race";
import { SkillByLevelTable } from "@/app/db/schemas/skillByLevel";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const RaceSkillTable = pgTable(
  "race_skill",
  {
    raceId: uuid("race_id")
      .notNull()
      .references(() => RaceTable.id, { onDelete: "cascade" }),
    skillByLevelId: uuid("skill_by_level_id")
      .notNull()
      .references(() => SkillByLevelTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.raceId, table.skillByLevelId] })]
);

export const RaceSkillRelations = relations(RaceSkillTable, ({ one }) => ({
  skillsByLevel: one(SkillByLevelTable, {
    fields: [RaceSkillTable.skillByLevelId],
    references: [SkillByLevelTable.id],
  }),
  races: one(RaceTable, {
    fields: [RaceSkillTable.raceId],
    references: [RaceTable.id],
  }),
}));

export type RaceSkillType = typeof RaceSkillTable.$inferSelect;
export type InsertRaceSkillType = typeof RaceSkillTable.$inferInsert;
