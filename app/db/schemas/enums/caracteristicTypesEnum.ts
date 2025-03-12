import { enumToPgEnum } from "@/app/db/utils/enumToPgEnum";
import { pgEnum } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export enum CaracteriticsTypes {
  SPIRIT = "spirit",
  PHYSICAL = "physical",
  CHARISMA = "charisma",
  DEXTERITY = "dexterity",
}

export const CaracteriticsTypesEnum = pgEnum(
  "caracteristic_types",
  enumToPgEnum(CaracteriticsTypes)
);

export const CaracteristicsTypesSchema = createSelectSchema(
  CaracteriticsTypesEnum
);
