import { ClassTable } from "@/app/db/schemas/class";
import { RaceTable } from "@/app/db/schemas/race";
import { pgTable, uuid } from "drizzle-orm/pg-core";

export const CharacterTable = pgTable("character", {
  id: uuid("id").primaryKey().defaultRandom(),
  raceId: uuid("race_id")
    .notNull()
    .references(() => RaceTable.id),
  classId: uuid("class_id")
    .notNull()
    .references(() => ClassTable.id),
});

export type CharacterType = typeof CharacterTable.$inferSelect;
export type InsertCharacterType = typeof CharacterTable.$inferInsert;
