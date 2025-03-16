import { ClassTable } from "@/app/db/schemas/class";
import { SkillTable } from "@/app/db/schemas/skill";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const ClassSkillTable = pgTable(
  "class_skill",
  {
    classId: uuid("class_id")
      .notNull()
      .references(() => ClassTable.id, {
        onDelete: "cascade",
      }),
    skillId: uuid("skill_id")
      .notNull()
      .references(() => SkillTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.classId, table.skillId] })]
);

export const ClassSkillRelations = relations(ClassSkillTable, ({ one }) => ({
  skill: one(SkillTable, {
    fields: [ClassSkillTable.skillId],
    references: [SkillTable.id],
  }),
  characterClass: one(ClassTable, {
    fields: [ClassSkillTable.classId],
    references: [ClassTable.id],
  }),
}));

export type ClassSkillType = typeof ClassSkillTable.$inferSelect;
export type InsertClassSkillType = typeof ClassSkillTable.$inferInsert;
