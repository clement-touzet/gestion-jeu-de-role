"use server";

import { db } from "@/app/db";
import {
  ClassStatisticModifierTable,
  ClassStatisticModifierTableType,
  ClassType,
  StatisticModifierTable,
  StatisticModifierType,
  StatisticType,
} from "@/app/db/schemas";

type insertClassStatModifierProps = {
  statisticId: StatisticType["id"];
  classId: ClassType["id"];
  level: StatisticModifierType["level"];
  statisticValue: StatisticModifierType["statisticValue"];
};

// classId : the class id of the class to add the stat modifier
export const insertClassStatModifier = async ({
  statisticId,
  classId,
  level,
  statisticValue,
}: insertClassStatModifierProps): Promise<
  ClassStatisticModifierTableType[]
> => {
  const insertedModifier = await db
    .insert(StatisticModifierTable)
    .values({
      statisticId: statisticId,
      level,
      statisticValue,
    })
    .returning();
  const insertedClassSatisticModifier = await db
    .insert(ClassStatisticModifierTable)
    .values({
      characterClassId: classId,
      statisticModifierId: insertedModifier[0].id,
    })
    .returning();

  return insertedClassSatisticModifier;
};
