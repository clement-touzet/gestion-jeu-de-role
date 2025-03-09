import { ClassTable } from "@/app/db/schemas/class";
import { StatisticTable } from "@/app/db/schemas/statistic";
import { relations } from "drizzle-orm";
import { integer, pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

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

// many to many relation with "statistic" table
export const ClassStatisticModifierTableRelations = relations(
  ClassStatisticModifierTable,
  ({ many }) => ({
    statisticToClassStatisticModifier: many(
      StatisticToClassStatisticModifierTable
    ),
  })
);

// table to handle many to many relationship between "statistic" table and "class_statisitic_modifier"
export const StatisticToClassStatisticModifierTable = pgTable(
  "statistic_to_class_statistic_modifier",
  {
    statisticId: uuid("statistic_id")
      .notNull()
      .references(() => StatisticTable.id),
    classStatisticModifierId: uuid("class_statistic_modifier_id")
      .notNull()
      .references(() => ClassStatisticModifierTable.id),
  },
  (table) => [
    primaryKey({
      columns: [table.statisticId, table.classStatisticModifierId],
    }),
  ]
);

export const StatisticToClassStatisticModifierTableRelations = relations(
  StatisticToClassStatisticModifierTable,
  ({ one }) => ({
    statistic: one(StatisticTable, {
      fields: [StatisticToClassStatisticModifierTable.statisticId],
      references: [StatisticTable.id],
    }),
    classStatisticModifier: one(ClassStatisticModifierTable, {
      fields: [StatisticToClassStatisticModifierTable.classStatisticModifierId],
      references: [ClassStatisticModifierTable.id],
    }),
  })
);
