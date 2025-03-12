import { RaceType } from "@/app/db/schemas";
import { getRaceBaseCaracteristicsEffects } from "@/app/features/character-creation/actions/getBaseCaracteristicsEffects";
import { RaceBaseCaracteristicsEffects } from "@/app/features/character-creation/types/RaceBaseCaracteristicsEffects";
import { useQuery } from "@tanstack/react-query";

const useGetRacesBaseCaracteristicsEffects = (raceId: RaceType["id"]) => {
  return useQuery<RaceBaseCaracteristicsEffects>({
    queryKey: ["get-races-base-caracteristics-effects", raceId],
    queryFn: () => getRaceBaseCaracteristicsEffects(raceId),
  });
};

export default useGetRacesBaseCaracteristicsEffects;
