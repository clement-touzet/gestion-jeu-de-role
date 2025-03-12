import { CaracteristicType, CaracteriticsTypes } from "@/app/db/schemas";

export type CaracteristicsByTypes = {
  [caracteristicType in CaracteriticsTypes]?: CaracteristicType["name"][];
};
