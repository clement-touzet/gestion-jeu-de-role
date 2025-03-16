import { SkillTable } from "@/app/db/schemas/skill";
import { SubClassTable } from "@/app/db/schemas/subClass";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const SubClassSkillTable = pgTable(
  "sub_class_skill",
  {
    subClassId: uuid("sub_class_id")
      .notNull()
      .references(() => SubClassTable.id, { onDelete: "cascade" }),
    skillId: uuid("skill_id")
      .notNull()
      .references(() => SkillTable.id, { onDelete: "cascade" }),
  },
  (table) => [primaryKey({ columns: [table.subClassId, table.skillId] })]
);

export const SubClassSkillTableRelations = relations(
  SubClassSkillTable,
  ({ one }) => ({
    skill: one(SkillTable, {
      fields: [SubClassSkillTable.skillId],
      references: [SkillTable.id],
    }),
    race: one(SubClassTable, {
      fields: [SubClassSkillTable.subClassId],
      references: [SubClassTable.id],
    }),
  })
);

export type SubClassSkillTableType = typeof SubClassSkillTable.$inferSelect;
export type InsertSubClassSkillTableType =
  typeof SubClassSkillTable.$inferInsert;
