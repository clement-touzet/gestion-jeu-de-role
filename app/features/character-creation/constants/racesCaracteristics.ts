import { CaracteriticsTypes } from "@/app/db/schemas/enums/caracteristicTypesEnum";

type RacesCaracteristicsType = {
  [caracteristicType in CaracteriticsTypes]: {
    label: string;
    caracteristics: RaceCaracteristicsEnum[];
  };
};

export enum RaceCaracteristicsEnum {
  CONNAISSANCES_HISTORIQUES = "Connaissances historiques",
  CONNAISSANCES_LINGUISTIQUES = "Connaissances linguistiques",
  CONNAISSANCES_MAGIQUES = "Connaissances magiques",
  RELGION = "Religion",
  RESISTANCE_MAGIQUE = "Résistance magique",
  INCANTATION = "Incantation",
  SCIENCES_FORMELLES = "Sciences formelles",
  CUISINE = "Cuisine",
  ALCHIMIE = "Alchimie",
  SAGESSE = "Sagesse",
  CHASSE = "Chasse",
  FORCE_BRUTE = "Force brute",
  ACROBATIES = "Acrobaties",
  ESCALADE = "Escalade",
  LANCER = "Lancer",
  CELERITE = "Célérité",
  NAGE = "Nage",
  ENDURANCE = "Endurance",
  ATTAQUE_DE_MELEE = "Attaque de mêlée",
  VOL = "Vol",
  PERCEPTION = "Perception",
  NEGOCIATION = "Négociation",
  PERSUASION = "Persuasion",
  INTIMIDATION = "Intimidation",
  REPRESENTATION = "Représentation",
  SEDUCTION = "Séduction",
  COMMANDEMENT = "Commandement",
  DRESSAGE = "Dressage",
  MENSONGE = "Mensonge",
  SANG_FROID = "Sang-froid",
  ESCAMOTAGE = "Escamotage",
  INGENIERIE = "Ingénierie",
  DISSIMULATION = "Dissimulation",
  ARTISANAT = "Artisanat",
  SOIN = "Soin",
  EQUITATION = "Equitation",
  NAVIGATION = "Navigation",
  TIR_A_DISTANCE = "Tir à distance",
  PISTAGE = "Pistage",
  JEU = "Jeu",
}

export const racesCaracteristics: RacesCaracteristicsType = {
  [CaracteriticsTypes.SPIRIT]: {
    label: "Esprit",
    caracteristics: [
      RaceCaracteristicsEnum.CONNAISSANCES_HISTORIQUES,
      RaceCaracteristicsEnum.CONNAISSANCES_LINGUISTIQUES,
      RaceCaracteristicsEnum.CONNAISSANCES_MAGIQUES,
      RaceCaracteristicsEnum.RELGION,
      RaceCaracteristicsEnum.RESISTANCE_MAGIQUE,
      RaceCaracteristicsEnum.INCANTATION,
      RaceCaracteristicsEnum.SCIENCES_FORMELLES,
      RaceCaracteristicsEnum.CUISINE,
      RaceCaracteristicsEnum.ALCHIMIE,
      RaceCaracteristicsEnum.SAGESSE,
    ],
  },
  [CaracteriticsTypes.PHYSICAL]: {
    label: "Physique",
    caracteristics: [
      RaceCaracteristicsEnum.CHASSE,
      RaceCaracteristicsEnum.FORCE_BRUTE,
      RaceCaracteristicsEnum.ACROBATIES,
      RaceCaracteristicsEnum.ESCALADE,
      RaceCaracteristicsEnum.LANCER,
      RaceCaracteristicsEnum.CELERITE,
      RaceCaracteristicsEnum.NAGE,
      RaceCaracteristicsEnum.ENDURANCE,
      RaceCaracteristicsEnum.ATTAQUE_DE_MELEE,
      RaceCaracteristicsEnum.VOL,
      RaceCaracteristicsEnum.PERCEPTION,
    ],
  },
  [CaracteriticsTypes.CHARISMA]: {
    label: "Charisme",
    caracteristics: [
      RaceCaracteristicsEnum.NEGOCIATION,
      RaceCaracteristicsEnum.PERSUASION,
      RaceCaracteristicsEnum.INTIMIDATION,
      RaceCaracteristicsEnum.REPRESENTATION,
      RaceCaracteristicsEnum.SEDUCTION,
      RaceCaracteristicsEnum.COMMANDEMENT,
      RaceCaracteristicsEnum.DRESSAGE,
      RaceCaracteristicsEnum.MENSONGE,
      RaceCaracteristicsEnum.SANG_FROID,
    ],
  },
  [CaracteriticsTypes.DEXTERITY]: {
    label: "Dextérité",
    caracteristics: [
      RaceCaracteristicsEnum.ESCAMOTAGE,
      RaceCaracteristicsEnum.INGENIERIE,
      RaceCaracteristicsEnum.DISSIMULATION,
      RaceCaracteristicsEnum.ARTISANAT,
      RaceCaracteristicsEnum.SOIN,
      RaceCaracteristicsEnum.EQUITATION,
      RaceCaracteristicsEnum.NAVIGATION,
      RaceCaracteristicsEnum.TIR_A_DISTANCE,
      RaceCaracteristicsEnum.PISTAGE,
      RaceCaracteristicsEnum.JEU,
    ],
  },
};
