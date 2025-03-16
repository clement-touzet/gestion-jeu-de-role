import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import SkillCardDetails from "@/app/features/character-creation/components/skills/SkillCardDetails";
import { SkillsByLevelsType } from "@/app/features/character-creation/types/SkillsByLevels";
import { DialogDescription } from "@radix-ui/react-dialog";
import { EyeIcon } from "lucide-react";
import { useState } from "react";

type Props = {
  dialogTitle: string;
  cardSubTitle?: string;
  skill: SkillsByLevelsType[string];
};

const SkillDetailsDialog = ({ dialogTitle, cardSubTitle, skill }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"} size={"icon"}>
          <EyeIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {cardSubTitle ? (
            <DialogDescription className="text-muted-foreground">
              {cardSubTitle}
            </DialogDescription>
          ) : null}
          <DialogDescription className="text-muted-foreground">
            {skill.baseEffectDescription}
          </DialogDescription>
        </DialogHeader>
        <SkillCardDetails skill={skill} />
      </DialogContent>
    </Dialog>
  );
};

export default SkillDetailsDialog;
