import { CaracteristicTable } from "@/app/db/schemas/caracteristic";
import { relations } from "drizzle-orm";
import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const CaracteristicTypeTable = pgTable("caracteristic_type", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }),
});

// === RELATION ===

export const CaracteristicTypeTableRelations = relations(
  CaracteristicTypeTable,
  ({ many }) => ({
    caracteristic: many(CaracteristicTable),
  })
);
