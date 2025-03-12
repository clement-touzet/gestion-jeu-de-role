import {
  BaseCaracteristicEffectType,
  CaracteristicType,
  RaceType,
} from "@/app/db/schemas";

export type RaceBaseCaracteristicsEffects = RaceType & {
  baseCaracteristicEffect: (BaseCaracteristicEffectType & {
    caracteristic: CaracteristicType;
  })[];
};
