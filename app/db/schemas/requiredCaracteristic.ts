import { CaracteristicTable } from "@/app/db/schemas/caracteristic";
import { SkillTable } from "@/app/db/schemas/skill";
import { relations } from "drizzle-orm";
import { pgTable, primaryKey, uuid } from "drizzle-orm/pg-core";

export const RequiredCaracteristicTable = pgTable(
  "required_caracteristic",
  {
    caracteristicId: uuid("caracteristic_id")
      .notNull()
      .references(() => CaracteristicTable.id),
    skillId: uuid("skillId")
      .notNull()
      .references(() => SkillTable.id),
  },
  (table) => [primaryKey({ columns: [table.caracteristicId, table.skillId] })]
);

export const RequiredCaracteristicTableRelations = relations(
  RequiredCaracteristicTable,
  ({ one }) => ({
    caracteristic: one(CaracteristicTable, {
      fields: [RequiredCaracteristicTable.caracteristicId],
      references: [CaracteristicTable.id],
    }),
    skill: one(SkillTable, {
      fields: [RequiredCaracteristicTable.skillId],
      references: [SkillTable.id],
    }),
  })
);

export type RequiredCaracteristicType =
  typeof RequiredCaracteristicTable.$inferSelect;
export type InsertRequiredCaracteristicType =
  typeof RequiredCaracteristicTable.$inferInsert;
