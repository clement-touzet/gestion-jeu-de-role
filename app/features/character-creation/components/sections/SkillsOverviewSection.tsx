"use client";
import H2 from "@/app/components/ui/H2";
import { ClassType, RaceType } from "@/app/db/schemas";
import ClassSkillsSection from "@/app/features/character-creation/components/sections/ClassSkillsSection";
import RaceSkillsSection from "@/app/features/character-creation/components/sections/RaceSkillsSection";
import React from "react";

type Props = {
  classes: ClassType[];
  classId: ClassType["id"];
  races: RaceType[];
  raceId: RaceType["id"];
};

const SkillsOverviewSection = ({ classes, classId, races, raceId }: Props) => {
  return (
    <div>
      <H2>Compétences</H2>
      <ClassSkillsSection classId={classId} classes={classes} />
      <RaceSkillsSection races={races} raceId={raceId} />
    </div>
  );
};

export default SkillsOverviewSection;
