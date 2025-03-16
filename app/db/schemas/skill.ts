import { ClassSkillTable } from "@/app/db/schemas/classSkill";
import { RaceSkillTable } from "@/app/db/schemas/raceSkill";
import { RequiredCaracteristicTable } from "@/app/db/schemas/requiredCaracteristic";
import { SkillByLevelTable } from "@/app/db/schemas/skillByLevel";
import { relations } from "drizzle-orm";
import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const SkillTable = pgTable("skill", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  baseEffectDescription: varchar("base_effect_description", {
    length: 1000,
  }).notNull(),
  mystheraCost: integer("mysthera_cost").notNull(),
});

export const SkillRelations = relations(SkillTable, ({ many, one }) => ({
  skillsByLevel: many(SkillByLevelTable),
  classSkill: one(ClassSkillTable),
  raceSkill: one(RaceSkillTable),
  skillRequiredCaracteristics: many(RequiredCaracteristicTable),
  subClassSkill: one(RequiredCaracteristicTable),
}));

export type SkillType = typeof SkillTable.$inferSelect;
export type InsertSkillType = typeof SkillTable.$inferInsert;
