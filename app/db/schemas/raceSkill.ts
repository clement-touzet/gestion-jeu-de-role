import { RaceTable } from "@/app/db/schemas/race";
import { SkillTable } from "@/app/db/schemas/skill";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const RaceSkillTable = pgTable(
  "race_skill",
  {
    raceId: uuid("race_id")
      .notNull()
      .references(() => RaceTable.id, { onDelete: "cascade" }),
    skillId: uuid("skill_id")
      .notNull()
      .references(() => SkillTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.raceId, table.skillId] })]
);

export const RaceSkillRelations = relations(RaceSkillTable, ({ one }) => ({
  skill: one(SkillTable, {
    fields: [RaceSkillTable.skillId],
    references: [SkillTable.id],
  }),
  race: one(RaceTable, {
    fields: [RaceSkillTable.raceId],
    references: [RaceTable.id],
  }),
}));

export type RaceSkillType = typeof RaceSkillTable.$inferSelect;
export type InsertRaceSkillType = typeof RaceSkillTable.$inferInsert;
