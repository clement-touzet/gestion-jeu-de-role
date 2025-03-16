import { CardFooter } from "@/app/components/ui/card";
import SkillDetailsDialog from "@/app/features/character-creation/components/skills/desktop/SkillDetailsDialog";
import SkillDetailsDrawer from "@/app/features/character-creation/components/skills/mobile/SkillDetailsDrawer";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import { useMediaQuery } from "@/app/hooks/use-media-query";
import React from "react";

type Props = {
  skill: SkillsByLevelsType[string];
  cardSubTitle?: string;
};

const SkillCardFooter = ({ skill, cardSubTitle }: Props) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const detailsTitle = `${skill.name} - Détails`;

  return (
    <CardFooter className="px-4 lg:px-6 justify-end">
      {isDesktop ? (
        <SkillDetailsDialog
          dialogTitle={detailsTitle}
          cardSubTitle={cardSubTitle}
          skill={skill}
        />
      ) : (
        <SkillDetailsDrawer
          drawerTitle={detailsTitle}
          cardSubTitle={cardSubTitle}
          skill={skill}
        />
      )}
    </CardFooter>
  );
};

export default SkillCardFooter;
