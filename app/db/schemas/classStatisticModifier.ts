import { ClassTable } from "@/app/db/schemas/class";
import { StatisticModifierTable } from "@/app/db/schemas/statisticModifier";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const ClassStatisticModifierTable = pgTable(
  "class_statisitic_modifier",
  {
    statisticModifierId: uuid("statistic_modifier_id")
      .notNull()
      .references(() => StatisticModifierTable.id, { onDelete: "cascade" }),
    characterClassId: uuid("character_class_id")
      .notNull()
      .references(() => ClassTable.id, { onDelete: "cascade" }),
  },
  (table) => [
    primaryKey({
      columns: [table.characterClassId, table.statisticModifierId],
    }),
  ]
);

// === RELATIONS ===

// many to many relation with "statistic" table
export const ClassStatisticModifierRelations = relations(
  ClassStatisticModifierTable,
  ({ one }) => ({
    characterClass: one(ClassTable, {
      fields: [ClassStatisticModifierTable.characterClassId],
      references: [ClassTable.id],
    }),
    statisticModifier: one(StatisticModifierTable, {
      fields: [ClassStatisticModifierTable.statisticModifierId],
      references: [StatisticModifierTable.id],
    }),
  })
);

// === TYPES ===

export type ClassStatisticModifierTableType =
  typeof ClassStatisticModifierTable.$inferSelect;
export type InsertClassStatisticModifierTableType =
  typeof ClassStatisticModifierTable.$inferInsert;
