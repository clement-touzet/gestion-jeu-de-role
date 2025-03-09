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
import { RaceType } from "@/app/db/schemas";
import React from "react";

type Props = {
  selectedRace: RaceType["name"];
  handleChangeSelectedRace: (value: RaceType["name"]) => void;
  races: RaceType[];
};

const RaceSelect = ({
  selectedRace,
  handleChangeSelectedRace,
  races,
}: Props) => {
  // const races: RaceType[] = await db.query.RaceTable.findMany({
  //   orderBy: [asc(RaceTable.name)],
  // });

  return (
    <Select value={selectedRace} onValueChange={handleChangeSelectedRace}>
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
