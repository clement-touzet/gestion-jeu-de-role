import { SkillByLevelType, SkillType } from "@/app/db/schemas";

export type SkillsByLevelsType = Record<
  SkillType["id"],
  Omit<SkillType, "id"> & {
    skillByLevel?: SkillByLevelType[];
  }
>;
