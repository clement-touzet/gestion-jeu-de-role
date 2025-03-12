"use client";
import H2 from "@/app/components/ui/H2";
import {
  BaseCaracteristicEffectTypes,
  CaracteriticsTypes,
  raceSchema,
  RaceType,
} from "@/app/db/schemas";
import RaceCaracteristics from "@/app/features/character-creation/components/RaceCaracteristics";
import useGetRacesBaseCaracteristicsEffects from "@/app/features/character-creation/hooks/useGetRacesBaseCaracteristicsEffects";
import { reduceRaceBaseCaracteristicsEffects } from "@/app/features/character-creation/lib/reduceBaseCaracteristicsEffects";
import { RaceCaracteristicsByEffectAndType } from "@/app/features/character-creation/types/RaceCaracteristicsByEffectsAndTypes";

type Props = {
  raceId: RaceType["id"];
};

const CaracteristicPointsSection = ({ raceId }: Props) => {
  const raceIdSchema = raceSchema.pick({ id: true });
  raceIdSchema.parse({ id: raceId });

  const { data, isLoading, isError } =
    useGetRacesBaseCaracteristicsEffects(raceId);
  if (isLoading) return <p>Loading...</p>;
  if (isError || !data || !data.baseCaracteristicEffect)
    return (
      <p>
        Erreur lors du chargement des points de caractéristiques à attribuer
      </p>
    );

  console.log("data from db", data);
  const raceBaseStatisticsByEffectAndType: RaceCaracteristicsByEffectAndType =
    reduceRaceBaseCaracteristicsEffects(data);

  const bonusPoints = data?.baseCaracteristicBonusPoints;
  const penaltyPoints = data?.baseCaracteristicPenaltyPoints;

  const bonusBaseCaracteristicsEffectsByType =
    raceBaseStatisticsByEffectAndType[BaseCaracteristicEffectTypes.BONUS];
  const penaltyBaseCaracteristicsEffectsByType =
    raceBaseStatisticsByEffectAndType[BaseCaracteristicEffectTypes.PENALTY];

  const caracteristicsTypesOfBonusEffects = Object.keys(
    bonusBaseCaracteristicsEffectsByType
  ) as CaracteriticsTypes[];
  const caracteristicsTypesOfPenaltyEffects = Object.keys(
    penaltyBaseCaracteristicsEffectsByType
  ) as CaracteriticsTypes[];

  return (
    <div className="mb-12">
      <div className="mb-8">
        <H2>Points de caractéristiques à répartir</H2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
        {/* bonus part */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="h3 font-semibold -mb-2">
              Bonus : {bonusPoints} points
            </h3>
            <p className="text-sm text-gray-700">à répartir entre</p>
          </div>

          <div className="flex flex-col gap-4">
            {caracteristicsTypesOfBonusEffects.map((caracteristicType) => {
              const caracteristics =
                bonusBaseCaracteristicsEffectsByType[caracteristicType];
              if (!caracteristics)
                throw new Error("caracteristics should not be undefined");
              return (
                <RaceCaracteristics
                  key={`${caracteristicType}-bonus`}
                  caracteristicsNames={caracteristics}
                  raceCaracteristicsType={caracteristicType}
                />
              );
            })}
          </div>
        </div>

        {/* penalty part */}
        <div className="flex-1">
          <div className="mb-6">
            <h3 className="h3 font-semibold -mb-2">
              Malus : {penaltyPoints} points
            </h3>
            <p className="text-sm text-gray-700">à répartir entre</p>
          </div>
          <div className="flex flex-col gap-4">
            {caracteristicsTypesOfPenaltyEffects.map((caracteristicType) => {
              const caracteristics =
                penaltyBaseCaracteristicsEffectsByType[caracteristicType];
              if (!caracteristics)
                throw new Error("caracteristics should not be undefined");
              return (
                <RaceCaracteristics
                  key={`${caracteristicType}-penalty`}
                  caracteristicsNames={caracteristics}
                  raceCaracteristicsType={caracteristicType}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaracteristicPointsSection;
