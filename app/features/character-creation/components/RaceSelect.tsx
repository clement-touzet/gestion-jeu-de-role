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
  selectedRaceId: RaceType["id"] | undefined;
  handleChangeSelectedRaceId: (value: RaceType["id"]) => void;
  races: RaceType[];
};

const RaceSelect = ({
  selectedRaceId,
  handleChangeSelectedRaceId,
  races,
}: Props) => {
  // const races: RaceType[] = await db.query.RaceTable.findMany({
  //   orderBy: [asc(RaceTable.name)],
  // });

  return (
    <Select value={selectedRaceId} onValueChange={handleChangeSelectedRaceId}>
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
