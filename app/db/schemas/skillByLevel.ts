import { ClassSkillTable } from "@/app/db/schemas/classSkill";
import { RaceSkillTable } from "@/app/db/schemas/raceSkill";
import { SkillTable } from "@/app/db/schemas/skill";
import { relations } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const SkillByLevelTable = pgTable("skill_by_level", {
  id: uuid("id").primaryKey().defaultRandom(),
  skillId: uuid("skill_id")
    .notNull()
    .references(() => SkillTable.id, { onDelete: "cascade" }),
  effectDescription: varchar("effect_description", { length: 1500 }),
  level: integer("level").notNull(),
});

export const SkillByLevelRelations = relations(
  SkillByLevelTable,
  ({ many, one }) => ({
    skill: one(SkillTable, {
      fields: [SkillByLevelTable.skillId],
      references: [SkillTable.id],
    }),
    raceSkills: many(RaceSkillTable),
    classSkills: many(ClassSkillTable),
  })
);

export type SkillByLevelType = typeof SkillByLevelTable.$inferSelect;
export type InsertSkillByLevelType = typeof SkillByLevelTable.$inferInsert;
