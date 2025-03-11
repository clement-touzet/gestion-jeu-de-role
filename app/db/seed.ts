import { db } from "@/app/db";
import { ClassTable, RaceTable, StatisticTable } from "@/app/db/schemas";
import charactersClasses from "@/app/features/character-creation/constants/charactersClasses";
import charactersRaces from "@/app/features/character-creation/constants/charactersRaces";
import { reset } from "drizzle-seed";
import * as schema from "./schemas";
import { charactersStatistics } from "@/app/features/character-creation/constants/charactersStatistics";
import { classStatisticsModifiers } from "@/app/features/character-creation/constants/classStatisticsModifiers";
import { insertClassStatModifier } from "@/app/features/character-creation/actions/insertClassStatModifier";
import { racesCaracteristics } from "@/app/features/character-creation/constants/racesCaracteristics";
import {
  insertCaracteristics,
  insertCaracteristicsType,
} from "@/app/features/character-creation/actions/insertCaracteristics";
import { insertBaseCaracteristicsEffects } from "@/app/features/character-creation/actions/insertBaseCaracteristicsEffects";

async function main() {
  console.log("seeding started !");

  console.log("\n");
  console.log("===reseting database !===");
  await reset(db, schema);

  console.log("\n");
  console.log("====inserting statistics====");
  const insertedStats: schema.StatisticType[] = [];
  for (const stat of charactersStatistics) {
    console.log("inserting", stat);
    const result = await db
      .insert(StatisticTable)
      .values({
        name: stat.name,
        unit: stat.unit,
      })
      .returning();
    const insertedStat = result[0];
    insertedStats.push(insertedStat);
  }

  console.log("\n");
  console.log("====inserting classes====");
  for (const characterClass of charactersClasses) {
    // pour chaque classe de charactere
    console.log("- inserting", characterClass);
    const insertedClass = (
      await db
        .insert(ClassTable)
        .values({
          name: characterClass,
        })
        .returning()
    )[0];

    console.log("-- inserting class stats modifiers");
    for (const stat of insertedStats) {
      // pour chaque statistique
      console.log("--- inserting ", stat.name);
      for (const modifier of classStatisticsModifiers[characterClass][
        stat.name
      ]) {
        console.log(
          "---- inserting. Level :",
          modifier.level,
          stat.name,
          ":",
          modifier.statisticValue
        );

        // pour chaque modification a faire
        insertClassStatModifier({
          classId: insertedClass.id,
          level: modifier.level,
          statisticId: stat.id,
          statisticValue: modifier.statisticValue,
        });
      }
    }
  }

  console.log("\n");
  console.log("====inserting races====");
  const insertedRaces = [];
  for (const race of charactersRaces) {
    const name = race.name;
    console.log("inserting", name);
    const result = (
      await db
        .insert(RaceTable)
        .values({
          name,
        })
        .returning()
    )[0];
    insertedRaces.push(result);
  }

  console.log("====inserting races characteristics====");
  const insertedCaracteristics: schema.Caracteristic[] = [];
  for (const characteristicType in racesCaracteristics) {
    const insertedCaracteristicType = (
      await insertCaracteristicsType([
        {
          name: racesCaracteristics[characteristicType].label,
        },
      ])
    )[0];
    console.log(
      "- inserted caracteristic type : ",
      racesCaracteristics[characteristicType].label
    );

    const caracteristics =
      racesCaracteristics[characteristicType].caracteristics;
    for (const currentCaracteristic of caracteristics) {
      console.log("-- inserted caracteristic : ", currentCaracteristic);
      const result = await insertCaracteristics([
        {
          name: currentCaracteristic,
          caracteristicTypeId: insertedCaracteristicType.id,
        },
      ]);
      insertedCaracteristics.push(result[0]);
    }
  }

  console.log("====inserting races base characteristics====");
  for (const insertedRace of insertedRaces) {
    console.log("- inserting base caracteristics effets");
    const raceFound = charactersRaces.find(
      (item) => item.name === insertedRace.name
    );
    const caracteristicsEffect = raceFound?.baseCaracteristicsEffects;
    if (caracteristicsEffect === undefined) continue;

    for (const effect of caracteristicsEffect) {
      const caracteristicFound = insertedCaracteristics.find(
        (item) => item.name === effect.name
      );
      if (caracteristicFound === undefined) continue;
      console.log("-- inserting base caracteristic effet :", effect.name);

      await insertBaseCaracteristicsEffects([
        {
          effectType: effect.effectType,
          caracteristicId: caracteristicFound.id,
          raceId: insertedRace.id,
        },
      ]);
    }
  }

  console.log("\n");
  console.log("seeding finished !");
}

main();
