"use server";

import { db } from "@/app/db";
import {
  RaceStatisticModifierTable,
  RaceStatisticModifierTableType,
  RaceType,
  StatisticModifierTable,
  StatisticModifierType,
  StatisticType,
} from "@/app/db/schemas";

type insertRaceStatModifierProps = {
  statisticId: StatisticType["id"];
  raceId: RaceType["id"];
  level: StatisticModifierType["level"];
  statisticValue: StatisticModifierType["statisticValue"];
};

// RaceId : the Race id of the Race to add the stat modifier
export const insertRaceStatModifier = async ({
  statisticId,
  raceId,
  level,
  statisticValue,
}: insertRaceStatModifierProps): Promise<RaceStatisticModifierTableType[]> => {
  const insertedModifier = await db
    .insert(StatisticModifierTable)
    .values({
      level,
      statisticId,
      statisticValue,
    })
    .returning();
  const insertedRaceSatisticModifier = await db
    .insert(RaceStatisticModifierTable)
    .values({
      raceId,
      statisticModifierId: insertedModifier[0].id,
    })
    .returning();
  return insertedRaceSatisticModifier;
};
