import { CaracteristicTable } from "@/app/db/schemas/caracteristic";
import { BaseCaracteristicEffectTypesEnum } from "@/app/db/schemas/enums/baseCaracteristicEffectTypes";
import { RaceTable } from "@/app/db/schemas/race";
import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const BaseCaracteristicEffectTable = pgTable(
  "base_caracteristic_effect",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    caracteristicId: uuid("caracteristic_id")
      .notNull()
      .references(() => CaracteristicTable.id),
    raceId: uuid("race_id")
      .notNull()
      .references(() => RaceTable.id),
    effectType: BaseCaracteristicEffectTypesEnum().notNull(),
  }
);

// === RELATIONS ===

export const BaseCaracteristicEffectRelation = relations(
  BaseCaracteristicEffectTable,
  ({ one }) => ({
    race: one(RaceTable, {
      fields: [BaseCaracteristicEffectTable.raceId],
      references: [RaceTable.id],
    }),
    caracteristic: one(CaracteristicTable, {
      fields: [BaseCaracteristicEffectTable.caracteristicId],
      references: [CaracteristicTable.id],
    }),
  })
);

// === TYPES ===

export type BaseCaracteristicEffectType =
  typeof BaseCaracteristicEffectTable.$inferSelect;
export type InsertBaseCaracteristicEffectType =
  typeof BaseCaracteristicEffectTable.$inferInsert;
