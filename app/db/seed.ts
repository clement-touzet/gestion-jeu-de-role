import { db } from "@/app/db";
import { ClassTable, RaceTable, StatisticTable } from "@/app/db/schemas";
import charactersClasses from "@/app/features/character-creation/constants/charactersClasses";
import charactersRaces from "@/app/features/character-creation/constants/charactersRaces";
import { reset } from "drizzle-seed";
import * as schema from "./schemas";
import { charactersStatistics } from "@/app/features/character-creation/constants/charactersStatistics";
import { classStatisticsModifiers } from "@/app/features/character-creation/constants/classStatisticsModifiers";
import { insertClassStatModifier } from "@/app/features/character-creation/actions/insertClassStatModifier";

async function main() {
  console.log("seeding started !");

  console.log("\n");
  console.log("===resetting database !===");
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
        console.log("---- inserting ", modifier.level, modifier.statisticValue);

        // pour chaque modification a faire
        await insertClassStatModifier({
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
  for (const race of charactersRaces) {
    console.log("inserting", race);
    await db.insert(RaceTable).values({
      name: race,
    });
  }

  const characterClass = await db.query.ClassTable.findFirst();
  if (characterClass === undefined)
    throw new Error("pas de classe trouvée, faut changer ça.");

  // const insertedClassSatisticModifier = await db
  //   .insert(ClassStatisticModifierTable)
  //   .values({
  //     statisticValue: 10,
  //     level: 1,
  //     characterClassId: characterClass.id,
  //   })
  //   .returning();
  // await db.insert(StatisticToClassStatisticModifierTable).values({
  //   classStatisticModifierId: insertedClassSatisticModifier[0].id,
  //   statisticId: lifeStat.id,
  // });

  console.log("\n");
  console.log("seeding finished !");
}

main();
