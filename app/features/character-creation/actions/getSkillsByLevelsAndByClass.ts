"use server";
import { db } from "@/app/db";
import {
  ClassSkillTable,
  ClassType,
  SkillByLevelTable,
  SkillTable,
} from "@/app/db/schemas";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import { eq } from "drizzle-orm";

export const getSkillsByLevelsAndByClass = async (
  classId: ClassType["id"]
): Promise<SkillsByLevelsType> => {
  const rows = await db
    .select({
      skill: SkillTable,
      skillByLevel: SkillByLevelTable,
    })
    .from(SkillTable)
    .innerJoin(SkillByLevelTable, eq(SkillByLevelTable.skillId, SkillTable.id))
    .innerJoin(ClassSkillTable, eq(ClassSkillTable.skillId, SkillTable.id))
    .where(eq(ClassSkillTable.classId, classId));
  const result = rows.reduce<SkillsByLevelsType>((accumulator, currentRow) => {
    const { id: skillId, ...skillWithoutId } = { ...currentRow.skill };

    if (!accumulator[skillId]) {
      // initialise l'objet avec une liste vide pour skillByLevel
      accumulator[skillId] = {
        ...skillWithoutId,
        skillByLevel: [],
      };
    }

    const currentSkill = accumulator[skillId];
    const currentSkillByLevels = currentSkill.skillByLevel;

    // ajoute au skill le skillByLevel actuel (description, level etc.)
    accumulator[skillId] = {
      ...currentSkill,
      skillByLevel: [...currentSkillByLevels, currentRow.skillByLevel],
    };

    return accumulator;
  }, {});

  return result;
};
