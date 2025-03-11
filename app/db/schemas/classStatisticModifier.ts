import { ClassTable } from "@/app/db/schemas/class";
import { StatisticToClassStatisticModifierTable } from "@/app/db/schemas/statisticToClassStatisticModifier";
import { relations } from "drizzle-orm";
import { integer, pgTable, uuid } from "drizzle-orm/pg-core";

// this table with handle all data related to the class statistic, for each level
// each combo "level" + "character_class_id" + "statistic_id" must be unique
export const ClassStatisticModifierTable = pgTable(
  "class_statisitic_modifier",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    characterClassId: uuid("character_class_id")
      .notNull()
      .references(() => ClassTable.id),
    statisticValue: integer().notNull(),
    level: integer().notNull(),
  }
);

// === RELATIONS ===

// many to many relation with "statistic" table
export const ClassStatisticModifierRelations = relations(
  ClassStatisticModifierTable,
  ({ many, one }) => ({
    statisticToClassStatisticModifier: many(
      StatisticToClassStatisticModifierTable
    ),
    characterClass: one(ClassTable, {
      fields: [ClassStatisticModifierTable.characterClassId],
      references: [ClassTable.id],
    }),
  })
);

// === TYPES ===

export type ClassStatisticModifierTableType =
  typeof ClassStatisticModifierTable.$inferSelect;
export type InsertClassStatisticModifierTableType =
  typeof ClassStatisticModifierTable.$inferInsert;
