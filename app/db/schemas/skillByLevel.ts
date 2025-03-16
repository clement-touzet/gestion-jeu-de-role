import { SkillTable } from "@/app/db/schemas/skill";
import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const SkillByLevelTable = pgTable(
  "skill_by_level",
  {
    id: uuid("id").notNull().defaultRandom(),
    skillId: uuid("skill_id")
      .notNull()
      .references(() => SkillTable.id, { onDelete: "cascade" }),
    effectDescription: varchar("effect_description", { length: 1500 }),
    level: integer("level").notNull(),
  },
  (table) => [primaryKey({ columns: [table.skillId, table.level] })]
);

export const SkillByLevelRelations = relations(
  SkillByLevelTable,
  ({ one }) => ({
    skill: one(SkillTable, {
      fields: [SkillByLevelTable.skillId],
      references: [SkillTable.id],
    }),
  })
);

export type SkillByLevelType = typeof SkillByLevelTable.$inferSelect;
export type InsertSkillByLevelType = typeof SkillByLevelTable.$inferInsert;
