import { BaseCaracteristicEffectTypes } from "@/app/db/schemas";
import { CaracteristicsByTypes } from "@/app/features/character-creation/types/RaceCaracteristicisByTypes";

export type RaceCaracteristicsByEffectAndType = {
  [baseCaracteristicEffect in BaseCaracteristicEffectTypes]: CaracteristicsByTypes;
};
