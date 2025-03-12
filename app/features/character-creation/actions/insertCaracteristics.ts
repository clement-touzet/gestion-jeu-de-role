"use server";
import { db } from "@/app/db";
import { CaracteristicTable, InsertCaracteristicType } from "@/app/db/schemas";

export const insertCaracteristics = async (
  caracteristic: InsertCaracteristicType[]
) => {
  return await db.insert(CaracteristicTable).values(caracteristic).returning();
};
