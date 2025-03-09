"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/components/ui/chart";
import { CharacterStatisticsType } from "@/app/features/character-creation/types/CharacterStatisticsType";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
// const chartData = [
//   { statisticName: "Vie", value: 18, min: 8, max: 21 },
//   { statisticName: "Attaque", value: 30, min: 17, max: 35 },
//   { statisticName: "Défense", value: 23, min: 2, max: 24 },
//   { statisticName: "Vitesse", value: 27, min: 18, max: 33 },
//   { statisticName: "Chance", value: 20, min: 1, max: 21 },
//   { statisticName: "Esquive", value: 21, min: 0, max: 35 },
// ];

const chartConfig = {
  value: {
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function CharacterStatisticsRadarChart({
  characterStatistics,
}: {
  characterStatistics: CharacterStatisticsType[];
}) {
  const normalisedChartData = characterStatistics.map((data) => {
    return {
      ...data,
      normalizedValue: (data.value / data.maxComparedToOthersCharacters) * 100,
    };
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Statistiques du personnage</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[250px]">
          <RadarChart data={normalisedChartData}>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  hideConfigLabel
                  nameKey="value"
                  displayNotNormalisedValue
                />
              }
            />
            <PolarGrid radialLines={false} strokeWidth={2} />
            <PolarAngleAxis dataKey="statisticName" domain={[0, 100]} />
            <Radar
              dataKey="normalizedValue"
              fill="var(--color-value)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
