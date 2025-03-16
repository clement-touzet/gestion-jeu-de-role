"use server";

import { db } from "@/app/db";
import { ClassTable, InsertClassType } from "@/app/db/schemas";

export const insertClasses = async (classes: InsertClassType[]) => {
  return await db.insert(ClassTable).values(classes).returning();
};
