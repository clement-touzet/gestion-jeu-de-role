import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/app/components/ui/card";
import SkillCardFooter from "@/app/features/character-creation/components/skills/SkillCardFooter";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import React from "react";

type Props = {
  skill: SkillsByLevelsType[string];
  cardSubTitle?: string;
};

const SkillCard = ({ skill, cardSubTitle }: Props) => {
  return (
    <Card className="flex flex-col justify-between py-4 gap-2 lg:py-6 lg:gap-4">
      <div className="">
        <CardHeader className="px-4 lg:px-6 pb-4">
          <CardTitle>{skill.name} </CardTitle>
          <CardDescription>
            Coût : {skill.mystheraCost} mysthéras
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 lg:px-6">
          <p className="">{skill.baseEffectDescription}</p>
        </CardContent>
      </div>
      {skill.skillByLevel ? (
        <SkillCardFooter
          cardSubTitle={cardSubTitle}
          skill={skill}
        ></SkillCardFooter>
      ) : null}
    </Card>
  );
};

export default SkillCard;
