import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import React from "react";

type Props = {
  skill: SkillsByLevelsType[string];
};

const SkillCardDetails = ({ skill }: Props) => {
  const skillsSortedByAscLevel = skill.skillByLevel.sort(
    (skillA, skillB) => skillA.level - skillB.level
  );
  return (
    <div>
      <p className="mb-2">
        <b>Cout en mysthéras</b> : {skill.mystheraCost}
      </p>
      {skillsSortedByAscLevel.map((skillLevel) => {
        return (
          <div key={skillLevel.id} className="flex flex-wrap mb-2">
            <p className="font-bold pr-1">Niveau {skillLevel.level} : </p>
            <p className="">{skillLevel.effectDescription}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCardDetails;
