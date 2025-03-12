import {
  BaseCaracteristicEffectType,
  BaseCaracteristicEffectTypes,
  CaracteristicType,
} from "@/app/db/schemas";
import { RaceBaseCaracteristicsEffects } from "@/app/features/character-creation/types/RaceBaseCaracteristicsEffects";
import { RaceCaracteristicsByEffectAndType } from "@/app/features/character-creation/types/RaceCaracteristicsByEffectsAndTypes";

export const reduceRaceBaseCaracteristicsEffects = (
  baseCaracteristicEffect: RaceBaseCaracteristicsEffects
): RaceCaracteristicsByEffectAndType => {
  const baseCaracteristicsEffets =
    baseCaracteristicEffect.baseCaracteristicEffect;

  const RACE_BASE_CARACTERISTICS_EFFECT_INITIAL_VALUE: RaceCaracteristicsByEffectAndType =
    {
      [BaseCaracteristicEffectTypes.BONUS]: {},
      [BaseCaracteristicEffectTypes.PENALTY]: {},
    };

  const resultFromReducer = baseCaracteristicsEffets.reduce(
    (accumulator, currentCaracteristicEffect) => {
      return insertCaracteristicToAccumulator(
        accumulator,
        currentCaracteristicEffect
      );
    },
    RACE_BASE_CARACTERISTICS_EFFECT_INITIAL_VALUE
  );
  return resultFromReducer;
};

const insertCaracteristicToAccumulator = (
  accumulator: RaceCaracteristicsByEffectAndType,
  currentCaracteristicEffect: BaseCaracteristicEffectType & {
    caracteristic: CaracteristicType;
  }
) => {
  const accumulatorCopy = { ...accumulator };

  // variables initialisations
  const currentEffectType = currentCaracteristicEffect.effectType;
  const currentCaracteristicType =
    currentCaracteristicEffect.caracteristic.caracteristicType;
  const currentCaracteristics =
    accumulatorCopy[currentEffectType][currentCaracteristicType];
  let newCaracteristics = [];
  const newCaracteristic: CaracteristicType["name"] =
    currentCaracteristicEffect.caracteristic.name;

  // avoid the case where currentCaracteristics is undefined and can't be iterated on
  if (!currentCaracteristics) {
    newCaracteristics = [newCaracteristic];
  } else {
    newCaracteristics = [...currentCaracteristics, newCaracteristic];
  }

  // insert the new caracteristic to the accumluator value
  accumulatorCopy[currentEffectType][currentCaracteristicType] =
    newCaracteristics;
  return accumulatorCopy;
};
