import { enumToPgEnum } from "@/app/db/utils/enumToPgEnum";
import { pgEnum } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export enum BaseCaracteristicEffectTypes {
  BONUS = "bonus",
  PENALTY = "penalty",
}

export const BaseCaracteristicEffectTypesEnum = pgEnum(
  "base_caracteristic_effect_types",
  enumToPgEnum(BaseCaracteristicEffectTypes)
);

export const BaseCaracteristicEffectTypesSchema = createSelectSchema(
  BaseCaracteristicEffectTypesEnum
);
