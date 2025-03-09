"use client";

import H2 from "@/app/components/ui/H2";
import HorizontalSpacing from "@/app/components/ui/horizontal-spacing";
import { ClassType, RaceType } from "@/app/db/schemas";
import { CharacterStatisticsRadarChart } from "@/app/features/character-creation/components/CharacterStatisticsRadarChart";
import ClassSelect from "@/app/features/character-creation/components/ClassSelect";
import RaceSelect from "@/app/features/character-creation/components/RaceSelect";
import React, { useState } from "react";

type Props = {
  charactersClasses: ClassType[];
  races: RaceType[];
};

const IntroductionParagraph = ({ charactersClasses, races }: Props) => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedRace, setSelectedRace] = useState("");

  const changeSelectedClass = (value: string) => {
    setSelectedClass(value);
  };

  const changeSelectedRace = (value: string) => {
    setSelectedRace(value);
  };
  const characterStatistics = [
    { statisticName: "Vie", value: 18, maxComparedToOthersCharacters: 21 },
    { statisticName: "Attaque", value: 30, maxComparedToOthersCharacters: 35 },
    { statisticName: "Défense", value: 23, maxComparedToOthersCharacters: 24 },
    { statisticName: "Vitesse", value: 27, maxComparedToOthersCharacters: 33 },
    { statisticName: "Chance", value: 20, maxComparedToOthersCharacters: 21 },
    { statisticName: "Esquive", value: 21, maxComparedToOthersCharacters: 35 },
  ];

  // const characterStatistics = calculateCharacterStatistics({ characterClassId: "" , level: 1});

  return (
    <>
      <H2 id="introduction-paragraph">Introduction</H2>

      <HorizontalSpacing horizontalPadding="12px" />
      <div className="flex items-center gap-2 flex-wrap">
        <p>Je veux être un</p>
        <ClassSelect
          selectedClass={selectedClass}
          handleChangeSelectedClass={changeSelectedClass}
          charactersClasses={charactersClasses}
        />
        <p>de la race</p>
        <RaceSelect
          selectedRace={selectedRace}
          handleChangeSelectedRace={changeSelectedRace}
          races={races}
        />
      </div>
      <HorizontalSpacing horizontalPadding="2px" />
      <p> Statistiques au niveau 1 :</p>
      <CharacterStatisticsRadarChart
        characterStatistics={characterStatistics}
      />
    </>
  );
};

export default IntroductionParagraph;
