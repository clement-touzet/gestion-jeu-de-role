"use server";
import { db } from "@/app/db";
import {
  CaracteristicTable,
  CaracteristicTypeTable,
  InsertCaracteristic,
  InsertCaracteristicType,
} from "@/app/db/schemas";

export const insertCaracteristicsType = async (
  caracteristicsTypes: InsertCaracteristicType[]
) => {
  return await db
    .insert(CaracteristicTypeTable)
    .values(caracteristicsTypes)
    .returning();
};

export const insertCaracteristics = async (
  caracteristic: InsertCaracteristic[]
) => {
  return await db.insert(CaracteristicTable).values(caracteristic).returning();
};
