"use server";

import { db } from "@/app/db";
import {
  ClassSkillTable,
  ClassSkillType,
  ClassType,
  InsertRaceSkillType,
  InsertSkillByLevelType,
  InsertSkillType,
  RaceSkillTable,
  RaceType,
  SkillByLevelTable,
  SkillTable,
} from "@/app/db/schemas";

const insertSkills = async (skills: InsertSkillType[]) => {
  const insertedSkills = await db.insert(SkillTable).values(skills).returning();
  return insertedSkills;
};

const insertClassSkills = async (classSkills: ClassSkillType[]) => {
  return await db.insert(ClassSkillTable).values(classSkills).returning();
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

export const insertClassSkillsByLevels = async (
  classId: ClassType["id"],
  classSkills: {
    skill: InsertSkillType;
    skillByLevels: Omit<InsertSkillByLevelType, "skillId">[];
  }[]
) => {
  if (classSkills.length === 0) return [];

  const skills = classSkills.map((classSkill) => {
    return classSkill.skill;
  });
  // insert skills
  console.log("inserting skills :", skills);
  const insertedSkills = await insertSkills(skills);

  const classSkillsToInsert = insertedSkills.map((skill) => {
    return {
      skillId: skill.id,
      classId,
    };
  });
  await insertClassSkills(classSkillsToInsert);

  // get the inserted skill id to be able to inserted all skillsByLevels in one go.

  // exemple of skillsByLevels :
  // [{skillId: 1,level 1,desc: "azerty" },{skillId: 1,level 3 },{skillId: 2,level 1 }]
  const skillsByLevels: InsertSkillByLevelType[] = [];

  insertedSkills.forEach((insertedSkill) => {
    // for each inserted skills
    const insertedSkillName = insertedSkill.name;
    const insertedSkillId = insertedSkill.id;

    // find the associated classSkill we want to insert
    const skillFound = classSkills.find(
      (skillByLevels) => skillByLevels.skill.name === insertedSkillName
    );
    if (!skillFound) throw new Error("cas impossible");

    const skillByLevels = skillFound.skillByLevels;

    skillByLevels.forEach((skillByLevel) => {
      // correctly format and assemble data
      skillsByLevels.push({
        ...skillByLevel,
        skillId: insertedSkillId,
      });
    });
  });

  console.log("inserting skills by levels :", skillsByLevels);
  const insertedSkillsByLevels = await insertSkillsByLevel(skillsByLevels);

  return {
    insertedSkills,
    insertedSkillsByLevels,
  };
};

export const insertRaceSkills = async (
  raceId: RaceType["id"],
  skills: InsertSkillType[]
) => {
  if (skills.length === 0) return [];
  const insertedSkills = await insertSkills(skills);

  const raceSkills: InsertRaceSkillType[] = insertedSkills.map((skill) => {
    return {
      raceId,
      skillId: skill.id,
    };
  });

  const insertedRaceSkills = await db
    .insert(RaceSkillTable)
    .values(raceSkills)
    .returning();
  return {
    insertedSkills,
    insertedRaceSkills,
  };
};
