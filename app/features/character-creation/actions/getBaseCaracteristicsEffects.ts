"use server";

import { db } from "@/app/db";
import { RaceTable, RaceType } from "@/app/db/schemas";
import { RaceBaseCaracteristicsEffects } from "@/app/features/character-creation/types/RaceBaseCaracteristicsEffects";
import { eq } from "drizzle-orm";

export const getRaceBaseCaracteristicsEffects = async (
  raceId: RaceType["id"]
): Promise<RaceBaseCaracteristicsEffects> => {
  // const raceCaracteristics = await db
  //   .select({
  //     caracteristicName: CaracteristicTable.name,
  //     caracteristicTypeName: CaracteristicTypeTable.name,
  //   })
  //   .from(CaracteristicTable)
  //   .innerJoin(
  //     CaracteristicTypeTable,
  //     eq(CaracteristicTypeTable.id, CaracteristicTable.caracteristicTypeId)
  //   )
  //   .leftJoin(
  //     BaseCaracteristicEffectTable,
  //     eq(CaracteristicTable.id, BaseCaracteristicEffectTable.caracteristicId)
  //   )
  //   .where(eq(BaseCaracteristicEffectTable.id, raceId));

  const raceCaracteristics = await db.query.RaceTable.findMany({
    with: {
      baseCaracteristicEffect: {
        with: {
          caracteristic: true,
        },
      },
    },
    where: eq(RaceTable.id, raceId),
  });

  return raceCaracteristics[0];
};
