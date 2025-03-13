import { ClassTable } from "@/app/db/schemas/class";
import { SkillByLevelTable } from "@/app/db/schemas/skillByLevel";
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
    skillByLevelId: uuid("skill_by_level_id")
      .notNull()
      .references(() => SkillByLevelTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.classId, table.skillByLevelId] })]
);

export const ClassSkillRelations = relations(ClassSkillTable, ({ one }) => ({
  skillsByLevel: one(SkillByLevelTable, {
    fields: [ClassSkillTable.skillByLevelId],
    references: [SkillByLevelTable.id],
  }),
  class: one(ClassTable, {
    fields: [ClassSkillTable.classId],
    references: [ClassTable.id],
  }),
}));

export type ClassSkillType = typeof ClassSkillTable.$inferSelect;
export type InsertClassSkillType = typeof ClassSkillTable.$inferInsert;
