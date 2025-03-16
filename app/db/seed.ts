import { db } from "@/app/db";
import { RaceTable, StatisticTable } from "@/app/db/schemas";
import charactersRaces from "@/app/features/character-creation/constants/characterRaces";
import { reset } from "drizzle-seed";
import * as schema from "./schemas";
import { statistics } from "@/app/features/character-creation/constants/charactersStatistics";
import { insertClassStatModifier } from "@/app/features/character-creation/actions/insertClassStatModifier";
import { racesCaracteristics } from "@/app/features/character-creation/constants/caracteristics";
import { insertCaracteristics } from "@/app/features/character-creation/actions/insertCaracteristics";
import { insertBaseCaracteristicsEffects } from "@/app/features/character-creation/actions/insertBaseCaracteristicsEffects";
import { CaracteriticsTypes } from "@/app/db/schemas/enums/caracteristicTypesEnum";
import { classSkills } from "@/app/features/character-creation/constants/characterClasses";
import {
  insertRaceSkills,
  insertClassSkillsByLevels,
} from "@/app/features/character-creation/actions/insertSkills";
import { insertClasses } from "@/app/features/character-creation/actions/inserts/insertClasses";

async function main() {
  console.log("seeding started !");

  console.log("\n");
  console.log("===reseting database !===");
  await reset(db, schema);

  console.log("\n");
  console.log("====inserting statistics====");
  const insertedStats: schema.StatisticType[] = [];
  for (const stat of statistics) {
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
  console.log(
    "====inserting classes and classes skills and classess statistics modifiers===="
  );
  const insertedClasses: {
    [x: schema.ClassType["name"]]: { id: schema.ClassType["id"] };
  } = {};

  for (const classSkillName of Object.keys(classSkills)) {
    const { classStatisticsModifiers, skills, ...characterClass } =
      classSkills[classSkillName];

    console.log("- inserting class ", characterClass.name);
    const insertedClass = (
      await insertClasses([
        {
          ...characterClass,
        },
      ])
    )[0];
    insertedClasses[insertedClass.name] = { id: insertedClass.id };

    console.log("- inserting class's skills  :", classSkillName);
    await insertClassSkillsByLevels(insertedClass.id, skills);

    for (const stat of insertedStats) {
      // pour chaque statistique
      for (const modifier of classStatisticsModifiers[stat.name]) {
        console.log(
          "-- inserting modifier. Level :",
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
  console.log("====inserting races & races skills====");
  const insertedRaces: {
    [x: schema.RaceType["name"]]: { id: schema.RaceType["id"] };
  } = {};
  for (const race of charactersRaces) {
    console.log("inserting", race.name);
    const insertedRace = (
      await db
        .insert(RaceTable)
        .values({
          name: race.name,
          baseCaracteristicBonusPoints: race.baseCaracteristicBonusPoints,
          baseCaracteristicPenaltyPoints: race.baseCaracteristicPenaltyPoints,
        })
        .returning()
    )[0];
    insertedRaces[insertedRace.name] = { id: insertedRace.id };

    console.log("inserting skills ", race.skills);
    await insertRaceSkills(insertedRace.id, race.skills);
  }

  console.log("\n");
  console.log("====inserting races characteristics====");
  const insertedCaracteristics: schema.CaracteristicType[] = [];
  let characteristicType: CaracteriticsTypes;
  for (characteristicType in racesCaracteristics) {
    console.log(
      "- inserting caracteristic type : ",
      racesCaracteristics[characteristicType].label
    );

    for (const characteristic of racesCaracteristics[characteristicType]
      .caracteristics) {
      console.log(
        "-- inserting caracteristic : ",
        characteristic,
        characteristicType
      );
      const characteristicToInsert: schema.InsertCaracteristicType[] = [
        {
          name: characteristic,
          caracteristicType: characteristicType,
        },
      ];
      const result = await insertCaracteristics(characteristicToInsert);
      insertedCaracteristics.push(result[0]);
    }
  }

  console.log("==== inserting races base characteristics effects ====");
  for (const insertedRaceName of Object.keys(insertedRaces)) {
    console.log("- inserting base caracteristics effets");
    const raceFound = charactersRaces.find(
      (item) => item.name === insertedRaceName
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
          raceId: insertedRaces[insertedRaceName].id,
        },
      ]);
    }
  }

  console.log("\n");
  console.log("seeding finished !");
}

main();
