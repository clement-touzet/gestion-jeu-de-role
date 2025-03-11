import { ClassStatisticModifierTable } from "@/app/db/schemas/classStatisticModifier";
import { StatisticTable } from "@/app/db/schemas/statistic";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

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
