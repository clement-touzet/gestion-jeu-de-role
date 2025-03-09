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
import { RaceTable, RaceType } from "@/app/db/schemas";
import { asc } from "drizzle-orm";
import React from "react";

const RaceSelect = async () => {
  const races: RaceType[] = await db.query.RaceTable.findMany({
    orderBy: [asc(RaceTable.name)],
  });

  return (
    <Select>
      <SelectTrigger className="w-[220px]">
        <SelectValue placeholder="Sélectionner une race" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Race</SelectLabel>

          {races.map((currentRace) => {
            return (
              <SelectItem key={currentRace.id} value={currentRace.id}>
                {currentRace.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default RaceSelect;
