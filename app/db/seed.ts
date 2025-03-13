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
import { insertCaracteristics } from "@/app/features/character-creation/actions/insertCaracteristics";
import { insertBaseCaracteristicsEffects } from "@/app/features/character-creation/actions/insertBaseCaracteristicsEffects";
import { CaracteriticsTypes } from "@/app/db/schemas/enums/caracteristicTypesEnum";
import { classSkills } from "@/app/features/character-creation/constants/skills";
import {
  insertClassSkill,
  insertSkill,
  insertSkillByLevel,
} from "@/app/features/character-creation/actions/insertSkills";

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
  const insertedClasses: {
    [x: schema.ClassType["name"]]: { id: schema.ClassType["id"] };
  } = {};
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

    insertedClasses[insertedClass.name] = { id: insertedClass.id };

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
  console.log("====inserting class skills====");
  for (const classSkill of classSkills) {
    console.log(
      "- inserting skill '",
      classSkill.name,
      "'de la classe",
      classSkill.class
    );
    const classId = insertedClasses[classSkill.class]
      .id as schema.ClassType["id"];
    const insertedSkill = (
      await insertSkill({
        baseEffectDescription: classSkill.baseEffectDescription,
        mystheraCost: classSkill.mystheraCost,
        name: classSkill.name,
      })
    )[0];
    for (const skillByLevel of classSkill.skillByLevels) {
      console.log("-- inserting skill level :", skillByLevel.level);

      const insertedSkillByLevel = await insertSkillByLevel({
        level: skillByLevel.level,
        skillId: insertedSkill.id,
        effectDescription: skillByLevel.description,
      });
      insertClassSkill({
        classId,
        skillByLevelId: insertedSkillByLevel[0].id,
      });
    }
  }

  console.log("\n");
  console.log("====inserting races====");
  const insertedRaces = [];
  for (const race of charactersRaces) {
    console.log("inserting", race.name);
    const result = (
      await db
        .insert(RaceTable)
        .values({
          name: race.name,
          baseCaracteristicBonusPoints: race.bonusPoints,
          baseCaracteristicPenaltyPoints: race.penaltyPoints,
        })
        .returning()
    )[0];
    insertedRaces.push(result);
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
