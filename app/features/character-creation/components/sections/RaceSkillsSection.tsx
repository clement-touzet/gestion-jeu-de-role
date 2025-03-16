import H3 from "@/app/components/ui/H3";
import Section from "@/app/components/ui/Section";
import { RaceType } from "@/app/db/schemas";
import SkillsCards from "@/app/features/character-creation/components/skills/ClassSkillsCards";
import SkillCard from "@/app/features/character-creation/components/skills/SkillCard";
import { useGetRaceSkills } from "@/app/features/character-creation/hooks/race/skill/useGetRaceSkills";
import React from "react";

type Props = {
  races: RaceType[];
  raceId: RaceType["id"];
};

const RaceSkillsSection = ({ races, raceId }: Props) => {
  const {
    data: raceSkills,
    isLoading: isRaceSkillsLoading,
    isError: isRaceSkillsError,
  } = useGetRaceSkills(raceId);
  const raceFound = races.find((race) => race.id === raceId);

  if (isRaceSkillsLoading) return <p>Loading race skills...</p>;
  if (isRaceSkillsError || !raceSkills || !raceFound)
    return <p>Erreur lors du chargement des skills</p>;

  const raceName = raceFound.name;
  console.log("skills des races : ", raceSkills);
  return (
    <Section>
      <H3>Compétences de la race {raceName}</H3>
      <SkillsCards>
        {raceSkills.map((raceSkill) => {
          return <SkillCard skill={raceSkill.skill} key={raceSkill.skillId} />;
        })}
      </SkillsCards>
    </Section>
  );
};

export default RaceSkillsSection;
