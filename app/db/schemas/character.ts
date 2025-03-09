import { RaceTable } from "@/app/db/schemas/race";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const CharacterTable = pgTable("character", {
  id: uuid("id").primaryKey().defaultRandom(),
  raceId: uuid("race_id")
    .notNull()
    .references(() => RaceTable.id),
});
