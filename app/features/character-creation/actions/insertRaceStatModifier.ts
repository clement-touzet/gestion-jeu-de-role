"use server";

import { db } from "@/app/db";
import {
  RaceStatisticModifierTable,
  RaceStatisticModifierTableType,
  RaceType,
  StatisticToRaceStatisticModifierTable,
  StatisticType,
} from "@/app/db/schemas";

type insertRaceStatModifierProps = {
  statisticId: StatisticType["id"];
  raceId: RaceType["id"];
  level: RaceStatisticModifierTableType["level"];
  statisticValue: RaceStatisticModifierTableType["statisticValue"];
};

// RaceId : the Race id of the Race to add the stat modifier
export const insertRaceStatModifier = async ({
  statisticId,
  raceId,
  level,
  statisticValue,
}: insertRaceStatModifierProps): Promise<RaceStatisticModifierTableType[]> => {
  const insertedRaceSatisticModifier = await db
    .insert(RaceStatisticModifierTable)
    .values({
      statisticValue: statisticValue,
      level: level,
      raceId: raceId,
    })
    .returning();
  await db.insert(StatisticToRaceStatisticModifierTable).values({
    raceStatisticModifierId: insertedRaceSatisticModifier[0].id,
    statisticId: statisticId,
  });
  return insertedRaceSatisticModifier;
};
