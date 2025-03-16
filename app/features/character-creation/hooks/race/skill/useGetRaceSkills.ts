import { RaceType } from "@/app/db/schemas";
import { getRaceSkills } from "@/app/features/character-creation/actions/race/skill/getRaceSkills";
import { useQuery } from "@tanstack/react-query";

export const useGetRaceSkills = (raceId: RaceType["id"]) => {
  return useQuery({
    queryKey: ["use-get-race-skills", raceId],
    queryFn: () => getRaceSkills(raceId),
  });
};
