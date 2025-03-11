"use server";

import { db } from "@/app/db";
import { RaceTable } from "@/app/db/schemas";
import { asc } from "drizzle-orm";

export const getRacesByAsc = async () => {
  const result = await db.query.RaceTable.findMany({
    orderBy: [asc(RaceTable.name)],
  });
  console.log("races: ", result);
  return result;
};
