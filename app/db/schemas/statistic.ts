import { StatisticToClassStatisticModifierTable } from "@/app/db/schemas/classStatisticModifier";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const StatisticTable = pgTable("statistic", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  unit: varchar("unit", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
});

// many to many relation with "class_satistic_modifier" table
export const StatisticTableRelations = relations(
  StatisticTable,
  ({ many }) => ({
    statisticToClassStatisticModifier: many(
      StatisticToClassStatisticModifierTable
    ),
  })
);
