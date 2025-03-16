"use server";

import { db } from "@/app/db";
import { RaceSkillTable, RaceType } from "@/app/db/schemas";
import { eq } from "drizzle-orm";

export const getRaceSkills = async (raceId: RaceType["id"]) => {
  console.log("race id", raceId);
  const result = await db.query.RaceSkillTable.findMany({
    with: {
      skill: true,
      race: true,
    },
    where: eq(RaceSkillTable.raceId, raceId),
  });
  console.log("result ", result);
  return result;
};
