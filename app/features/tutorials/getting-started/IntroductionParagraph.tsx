"use client";

import H2 from "@/app/components/ui/H2";
import HorizontalSpacing from "@/app/components/ui/horizontal-spacing";
import Section from "@/app/components/ui/Section";
import { ClassType, RaceType } from "@/app/db/schemas";
import { CharacterStatisticsRadarChart } from "@/app/features/character-creation/components/CharacterStatisticsRadarChart";
import ClassSelect from "@/app/features/character-creation/components/ClassSelect";
import RaceSelect from "@/app/features/character-creation/components/RaceSelect";
import CaracteristicPointsSection from "@/app/features/character-creation/components/sections/CaracteristicPointsSection";
import ClassSkillsSection from "@/app/features/character-creation/components/sections/ClassSkillsSection";
import RaceSkillsSection from "@/app/features/character-creation/components/sections/RaceSkillsSection";
import React, { useState } from "react";

type Props = {
  charactersClasses: ClassType[];
  races: RaceType[];
};

const IntroductionParagraph = ({ charactersClasses, races }: Props) => {
  const [selectedClassId, setSelectedClassId] = useState<
    RaceType["id"] | undefined
  >(undefined);
  const [selectedRaceId, setSelectedRaceId] = useState<
    RaceType["id"] | undefined
  >(undefined);

  const changeSelectedClass = (value: ClassType["id"]) => {
    setSelectedClassId(value);
  };

  const changeSelectedRace = (value: RaceType["id"]) => {
    setSelectedRaceId(value);
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
      <Section>
        <H2 id="introduction-paragraph">Introduction</H2>

        <HorizontalSpacing horizontalPadding="12px" />
        <div className="flex items-center gap-2 flex-wrap">
          <p>Je veux être un</p>
          <ClassSelect
            selectedClass={selectedClassId}
            handleChangeSelectedClass={changeSelectedClass}
            charactersClasses={charactersClasses}
          />
          <p>de la race</p>
          <RaceSelect
            selectedRaceId={selectedRaceId}
            handleChangeSelectedRaceId={changeSelectedRace}
            races={races}
          />
        </div>
        <HorizontalSpacing horizontalPadding="2px" />
        <p> Statistiques au niveau 1 :</p>
        <CharacterStatisticsRadarChart
          characterStatistics={characterStatistics}
        />
      </Section>

      {selectedClassId ? (
        <ClassSkillsSection
          classId={selectedClassId}
          classes={charactersClasses}
        />
      ) : null}

      {selectedRaceId ? (
        <RaceSkillsSection raceId={selectedRaceId} races={races} />
      ) : null}

      {/* montrer les caractéristiques de base possibles à améliorer */}
      {selectedRaceId ? (
        <CaracteristicPointsSection raceId={selectedRaceId} />
      ) : null}
    </>
  );
};

export default IntroductionParagraph;
