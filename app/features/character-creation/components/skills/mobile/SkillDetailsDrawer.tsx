import { Button } from "@/app/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/components/ui/drawer";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import SkillCardDetails from "@/app/features/character-creation/components/skills/SkillCardDetails";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import { EyeIcon } from "lucide-react";
import React from "react";

type Props = {
  drawerTitle: string;
  cardSubTitle?: string;
  skill: SkillsByLevelsType[string];
};

const SkillDetailsDrawer = ({ drawerTitle, cardSubTitle, skill }: Props) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <EyeIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="">
        <DrawerHeader>
          <DrawerTitle>{drawerTitle}</DrawerTitle>
          {cardSubTitle ? (
            <DrawerDescription>{cardSubTitle}</DrawerDescription>
          ) : null}
          <DrawerDescription>{skill.baseEffectDescription}</DrawerDescription>
        </DrawerHeader>
        <ScrollArea className="py-4 max-h-[40vh] overflow-auto">
          <div className="px-4">
            <SkillCardDetails skill={skill} />
          </div>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
};

export default SkillDetailsDrawer;
