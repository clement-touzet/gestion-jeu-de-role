"use server";
import { db } from "@/app/db";
import {
  BaseCaracteristicEffectTable,
  InsertBaseCaracteristicEffectType,
} from "@/app/db/schemas";

export const insertBaseCaracteristicsEffects = async (
  baseCaracteristicsEffects: InsertBaseCaracteristicEffectType[]
) => {
  return await db
    .insert(BaseCaracteristicEffectTable)
    .values(baseCaracteristicsEffects)
    .returning();
};
