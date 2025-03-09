"use server";

import { db } from "@/app/db";
import {
  ClassStatisticModifierTable,
  ClassStatisticModifierTableType,
  ClassType,
  StatisticToClassStatisticModifierTable,
  StatisticType,
} from "@/app/db/schemas";

type insertClassStatModifierProps = {
  statisticId: StatisticType["id"];
  classId: ClassType["id"];
  level: ClassStatisticModifierTableType["level"];
  statisticValue: ClassStatisticModifierTableType["statisticValue"];
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
  const insertedClassSatisticModifier = await db
    .insert(ClassStatisticModifierTable)
    .values({
      statisticValue: statisticValue,
      level: level,
      characterClassId: classId,
    })
    .returning();
  await db.insert(StatisticToClassStatisticModifierTable).values({
    classStatisticModifierId: insertedClassSatisticModifier[0].id,
    statisticId: statisticId,
  });
  return insertedClassSatisticModifier;
};
