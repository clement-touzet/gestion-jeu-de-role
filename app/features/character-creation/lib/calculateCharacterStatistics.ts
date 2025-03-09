"use server";
import { db } from "@/app/db";
import {
  CharacterType,
  ClassStatisticModifierTable,
  ClassStatisticModifierTableType,
  StatisticTable,
  StatisticToClassStatisticModifierTable,
} from "@/app/db/schemas";
import { CharacterStatisticsType } from "@/app/features/character-creation/types/CharacterStatisticsType";
import { and, eq } from "drizzle-orm";

export const calculateCharacterStatistics = async ({
  characterClassId,
  level = 1,
}: {
  characterClassId: CharacterType["classId"];
  level: ClassStatisticModifierTableType["level"];
}): CharacterStatisticsType[] => {
  const classStats = await db
    .select()
    .from(ClassStatisticModifierTable)
    .leftJoin(
      StatisticToClassStatisticModifierTable,
      eq(
        StatisticToClassStatisticModifierTable.classStatisticModifierId,
        ClassStatisticModifierTable.id
      )
    )
    .leftJoin(
      StatisticTable,
      eq(StatisticTable.id, StatisticToClassStatisticModifierTable.statisticId)
    )
    .where(
      and(
        eq(ClassStatisticModifierTable.level, level),
        eq(ClassStatisticModifierTable.characterClassId, characterClassId)
      )
    );

  const classStat = classStats[0];

  return result;
};
