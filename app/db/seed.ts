import { db } from "@/app/db";
import {
  ClassTable,
  RaceTable,
  ClassStatisticModifierTable,
  StatisticTable,
  StatisticToClassStatisticModifierTable,
} from "@/app/db/schemas";
import charactersClasses from "@/app/features/character-creation/constants/charactersClasses";
import charactersRaces from "@/app/features/character-creation/constants/charactersRaces";
import { reset } from "drizzle-seed";
import * as schema from "./schemas";

async function main() {
  console.log("seeding started !");

  console.log("\n");
  console.log("===resetting database !===");
  await reset(db, schema);

  console.log("\n");
  console.log("====inserting races====");
  for (const race of charactersRaces) {
    console.log("inserting", race);
    await db.insert(RaceTable).values({
      name: race,
    });
  }

  console.log("\n");
  console.log("====inserting classes====");
  for (const characterClass of charactersClasses) {
    console.log("inserting", characterClass);
    await db.insert(ClassTable).values({
      name: characterClass,
    });
  }

  const characterClass = await db.query.ClassTable.findFirst();
  if (characterClass === undefined)
    throw new Error("pas de classe trouvée, faut changer ça.");

  console.log("\n");
  console.log("====inserting statistics====");
  const lifeStat = (
    await db
      .insert(StatisticTable)
      .values([
        {
          name: "Vie",
          unit: "HP",
        },
        {
          name: "Mistera",
          unit: "MTR",
        },
      ])
      .returning()
  )[0];

  console.log("\n");
  console.log("====inserting class stats modifiers ====");
  const insertedClassSatisticModifier = await db
    .insert(ClassStatisticModifierTable)
    .values({
      statisticValue: 10,
      level: 1,
      characterClassId: characterClass.id,
    })
    .returning();
  await db.insert(StatisticToClassStatisticModifierTable).values({
    classStatisticModifierId: insertedClassSatisticModifier[0].id,
    statisticId: lifeStat.id,
  });

  console.log("\n");
  console.log("seeding finished !");
}

main();
