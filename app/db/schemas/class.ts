import { CharacterTable } from "@/app/db/schemas/character";
import { ClassSkillTable } from "@/app/db/schemas/classSkill";
import { ClassStatisticModifierTable } from "@/app/db/schemas/classStatisticModifier";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const ClassTable = pgTable("class", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
});

// === RELATIONS ===

export const ClassRelations = relations(ClassTable, ({ many }) => ({
  character: many(CharacterTable),
  classStatisticModifer: many(ClassStatisticModifierTable),
  classSkills: many(ClassSkillTable),
}));

// === TYPES ===

export type ClassType = typeof ClassTable.$inferSelect;
export type InsertClassType = typeof ClassTable.$inferInsert;
