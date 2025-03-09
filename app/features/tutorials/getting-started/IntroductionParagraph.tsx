import H2 from "@/app/components/ui/H2";
import HorizontalSpacing from "@/app/components/ui/horizontal-spacing";
import { CharacterStatisticsRadarChart } from "@/app/features/character-creation/components/CharacterStatisticsRadarChart";
import ClassSelect from "@/app/features/character-creation/components/ClassSelect";
import RaceSelect from "@/app/features/character-creation/components/RaceSelect";
import React from "react";

const IntroductionParagraph = () => {
  const characterStatistics = [
    { statisticName: "Vie", value: 18, maxComparedToOthersCharacters: 21 },
    { statisticName: "Attaque", value: 30, maxComparedToOthersCharacters: 35 },
    { statisticName: "Défense", value: 23, maxComparedToOthersCharacters: 24 },
    { statisticName: "Vitesse", value: 27, maxComparedToOthersCharacters: 33 },
    { statisticName: "Chance", value: 20, maxComparedToOthersCharacters: 21 },
    { statisticName: "Esquive", value: 21, maxComparedToOthersCharacters: 35 },
  ];

  return (
    <>
      <H2 id="introduction-paragraph">Introduction</H2>

      <HorizontalSpacing horizontalPadding="12px" />
      <div className="flex items-center gap-2 flex-wrap">
        <p>Je veux être un</p>
        <ClassSelect />
        <p>de la race</p>
        <RaceSelect />
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
