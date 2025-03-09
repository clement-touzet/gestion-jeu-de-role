"use server";

import { db } from "@/app/db";
import { ClassTable } from "@/app/db/schemas";
import { asc } from "drizzle-orm";

export const getClassesByAsc = async () =>
  await db.query.ClassTable.findMany({
    orderBy: [asc(ClassTable.name)],
  });
