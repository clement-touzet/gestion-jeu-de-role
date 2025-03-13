"use server";
import { db } from "@/app/db";
import { ClassSkillTable, ClassType } from "@/app/db/schemas";
import { eq } from "drizzle-orm";

export const getSkillsByLevelsAndByClass = async (classId: ClassType["id"]) => {
  return await db.query.SkillTable.findMany({
    with: {
      skillsByLevel: {
        with: {
          classSkills: true,
        },
      },
    },
    where: eq(ClassSkillTable.classId, classId),
  });
};
