import H3 from "@/app/components/ui/H3";
import Section from "@/app/components/ui/Section";
import { ClassType } from "@/app/db/schemas";
import SkillsCards from "@/app/features/character-creation/components/skills/ClassSkillsCards";
import SkillCard from "@/app/features/character-creation/components/skills/SkillCard";
import useGetSkillsByLevelsAndByClass from "@/app/features/character-creation/hooks/useGetSkillsByLevelsAndByClass";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import React from "react";

type Props = {
  classes: ClassType[];
  classId: ClassType["id"];
};

const ClassSkillsSection = ({ classes, classId }: Props) => {
  const { data, isLoading, isError } = useGetSkillsByLevelsAndByClass(classId);
  const classFound = classes.find(
    (characterClass) => characterClass.id === classId
  );

  if (isLoading) return <p>Loading class skills...</p>;
  if (isError || !data || !classFound)
    return <p>Erreur lors du chargement des skills</p>;

  const skillsByLevels: SkillsByLevelsType = data;
  const characterClassName = classFound.name;

  return (
    <Section>
      <H3>Compétences de la classe {characterClassName}</H3>
      <SkillsCards>
        {Object.keys(skillsByLevels).map((skillId) => {
          const skill = skillsByLevels[skillId];
          return (
            <SkillCard
              key={skillId}
              cardSubTitle={characterClassName}
              skill={skill}
            />
          );
        })}
      </SkillsCards>
    </Section>
  );
};

export default ClassSkillsSection;
