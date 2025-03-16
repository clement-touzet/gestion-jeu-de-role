import { ClassType } from "@/app/db/schemas";
import { getSkillsByLevelsAndByClass } from "@/app/features/character-creation/actions/getSkillsByLevelsAndByClass";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import { useQuery } from "@tanstack/react-query";

const useGetSkillsByLevelsAndByClass = (classId: ClassType["id"]) => {
  return useQuery<SkillsByLevelsType>({
    queryKey: ["get-class-skills-by-levels", classId],
    queryFn: () => getSkillsByLevelsAndByClass(classId),
  });
};

export default useGetSkillsByLevelsAndByClass;
