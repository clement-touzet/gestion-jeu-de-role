import { BaseCaracteristicEffectTable } from "@/app/db/schemas/baseCaracteristicEffect";
import { CaracteriticsTypesEnum } from "@/app/db/schemas/enums/caracteristicTypesEnum";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const CaracteristicTable = pgTable("caracteristic", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 1000 }),
  caracteristicType: CaracteriticsTypesEnum().notNull(),
});

// === RELATION ===

export const CaracteristicRelations = relations(
  CaracteristicTable,
  ({ many }) => ({
    baseCaracteristicEffect: many(BaseCaracteristicEffectTable),
  })
);

// === TYPES ===

export type CaracteristicType = typeof CaracteristicTable.$inferSelect;
export type InsertCaracteristicType = typeof CaracteristicTable.$inferInsert;
