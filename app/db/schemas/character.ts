import { ClassTable } from "@/app/db/schemas/class";
import { RaceTable } from "@/app/db/schemas/race";
import { relations } from "drizzle-orm";
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

// === RELATIONS ===

export const ChracterRelations = relations(CharacterTable, ({ one }) => ({
  race: one(RaceTable, {
    fields: [CharacterTable.raceId],
    references: [RaceTable.id],
  }),
  characterClass: one(ClassTable, {
    fields: [CharacterTable.classId],
    references: [ClassTable.id],
  }),
}));

// === TYPES ===

export type CharacterType = typeof CharacterTable.$inferSelect;
export type InsertCharacterType = typeof CharacterTable.$inferInsert;
