"use server";

import { db } from "@/app/db";
import {
  ClassSkillTable,
  ClassSkillType,
  InsertSkillByLevelType,
  InsertSkillType,
  SkillByLevelTable,
  SkillTable,
} from "@/app/db/schemas";

export const insertSkill = async (skill: InsertSkillType) => {
  const insertedSkill = await db.insert(SkillTable).values(skill).returning();
  return insertedSkill;
};

export const insertSkills = async (skills: InsertSkillType[]) => {
  const insertedSkills = await db.insert(SkillTable).values(skills).returning();
  return insertedSkills;
};

export const insertSkillByLevel = async (
  skillByLevel: InsertSkillByLevelType
) => {
  const insertedSkillByLevel = await db
    .insert(SkillByLevelTable)
    .values(skillByLevel)
    .returning();
  return insertedSkillByLevel;
};

export const insertClassSkill = async (classSkill: ClassSkillType) => {
  return await db.insert(ClassSkillTable).values(classSkill).returning();
};

export const insertSkillsByLevel = async (
  skillsByLevel: InsertSkillByLevelType[]
) => {
  const insertedSkillsByLevel = await db
    .insert(SkillByLevelTable)
    .values(skillsByLevel)
    .returning();
  return insertedSkillsByLevel;
};
