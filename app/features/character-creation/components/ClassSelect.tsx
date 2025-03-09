import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { db } from "@/app/db";
import { ClassTable, ClassType } from "@/app/db/schemas";
import { asc } from "drizzle-orm";

const ClassSelect = async () => {
  const charactersClasses: ClassType[] = await db.query.ClassTable.findMany({
    orderBy: [asc(ClassTable.name)],
  });

  return (
    <Select>
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
