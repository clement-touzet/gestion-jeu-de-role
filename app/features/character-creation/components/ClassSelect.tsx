"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { ClassType } from "@/app/db/schemas";

type Props = {
  selectedClass: ClassType["name"];
  handleChangeSelectedClass: (value: ClassType["name"]) => void;
  charactersClasses: ClassType[];
};

const ClassSelect = ({
  selectedClass,
  handleChangeSelectedClass,
  charactersClasses,
}: Props) => {
  // const charactersClasses = [{ id: "test", name: "test" }];

  return (
    <Select value={selectedClass} onValueChange={handleChangeSelectedClass}>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sélectionner une classe" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Classe</SelectLabel>

          {charactersClasses.map((currentClass) => {
            return (
              <SelectItem key={currentClass.id} value={currentClass.id}>
                {currentClass.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ClassSelect;
