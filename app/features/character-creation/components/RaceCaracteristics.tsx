import { Badge } from "@/app/components/ui/badge";
import { CaracteristicType, CaracteriticsTypes } from "@/app/db/schemas";

type Props = {
  caracteristicsNames: CaracteristicType["name"][];
  raceCaracteristicsType: CaracteriticsTypes;
};

type configType = {
  [x in CaracteriticsTypes]: {
    label: string;
    textColor: string;
    badgeVariant: "blue" | "red" | "yellow" | "green";
  };
};

const caracteriticsTypesConfig: configType = {
  [CaracteriticsTypes.SPIRIT]: {
    label: "Esprit",
    textColor: "text-blue-900",
    badgeVariant: "blue",
  },
  [CaracteriticsTypes.PHYSICAL]: {
    label: "Physique",
    textColor: "text-red-900",
    badgeVariant: "red",
  },
  [CaracteriticsTypes.CHARISMA]: {
    label: "Charisme",
    textColor: "text-yellow-900",
    badgeVariant: "yellow",
  },
  [CaracteriticsTypes.DEXTERITY]: {
    label: "Dextérité",
    textColor: "text-green-900",
    badgeVariant: "green",
  },
};

// displays caracteristics chips below its corresponding caracteristic type
const RaceCaracteristics = ({
  caracteristicsNames,
  raceCaracteristicsType,
}: Props) => {
  const config = caracteriticsTypesConfig[raceCaracteristicsType];

  if (!config)
    throw new Error("This caracteristic type is not implemented yet");

  return (
    <>
      <div>
        <p className={`font-bold text-xl ${config.textColor}`}>
          {config.label}
        </p>
        <div className="flex gap-1">
          {caracteristicsNames.map((caracteristicName) => {
            return (
              <Badge key={caracteristicName} variant={config.badgeVariant}>
                {caracteristicName}
              </Badge>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RaceCaracteristics;
