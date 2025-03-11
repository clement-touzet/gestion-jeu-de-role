import { BaseCaracteristicEffectTable } from "@/app/db/schemas/baseCaracteristicEffect";
import { CaracteristicTypeTable } from "@/app/db/schemas/caracteristicType";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const CaracteristicTable = pgTable("caracteristic", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
  caracteristicTypeId: uuid("caracteristic_type_id")
    .notNull()
    .references(() => CaracteristicTypeTable.id),
});

// === RELATION ===

export const CaracteristicRelations = relations(
  CaracteristicTable,
  ({ many, one }) => ({
    baseCaracteristicEffect: many(BaseCaracteristicEffectTable),
    caracteristicType: one(CaracteristicTypeTable, {
      fields: [CaracteristicTable.caracteristicTypeId],
      references: [CaracteristicTypeTable.id],
    }),
  })
);

// === TYPES ===

export type Caracteristic = typeof CaracteristicTable.$inferSelect;
export type InsertCaracteristic = typeof CaracteristicTable.$inferInsert;
