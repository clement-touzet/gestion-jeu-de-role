import { BaseCaracteristicEffectTypes } from "@/app/db/schemas";
import { RaceCaracteristicsEnum } from "@/app/features/character-creation/constants/racesCaracteristics";

const charactersRaces = [
  {
    name: "Arkan Sonney",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.CELERITE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.CUISINE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.ALCHIMIE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.NEGOCIATION,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.PERSUASION,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.DISSIMULATION,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.ATTAQUE_DE_MELEE,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
      {
        name: RaceCaracteristicsEnum.LANCER,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
      {
        name: RaceCaracteristicsEnum.CHASSE,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
    ],
  },
  {
    name: "Aknade",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.TIR_A_DISTANCE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },

      {
        name: RaceCaracteristicsEnum.ESCAMOTAGE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.CONNAISSANCES_HISTORIQUES,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
      {
        name: RaceCaracteristicsEnum.ACROBATIES,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
    ],
  },
  {
    name: "Brumecendre",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Draconien",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Dryade",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Ellub",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Ellulu",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Evaros",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Feliarea",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Gaueko",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Géant",
    bonusPoints: 1,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Gobelin",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
      { name: "Cuisine", effectType: BaseCaracteristicEffectTypes.BONUS },
      { name: "Alchimie", effectType: BaseCaracteristicEffectTypes.BONUS },
      { name: "Célérité", effectType: BaseCaracteristicEffectTypes.PENALTY },
      { name: "Endurance", effectType: BaseCaracteristicEffectTypes.PENALTY },
    ],
  },
  {
    name: "Semi-homme",
    bonusPoints: 2,
    penaltyPoints: 0,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Humain (Xaldien/Varentien)",
    bonusPoints: 1,
    penaltyPoints: 0,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Igarbam (homme-loutre)",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Korrigan",
    bonusPoints: 3,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Lamina",
    bonusPoints: 3,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Léviathid",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Nain",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Ogre bleu",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Orc",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Séraphin",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Subo",
    bonusPoints: 2,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
  {
    name: "Vaggatede",
    bonusPoints: 3,
    penaltyPoints: 1,
    baseCaracteristicsEffects: [
      { name: "Force brute", effectType: BaseCaracteristicEffectTypes.BONUS },
    ],
  },
];

export default charactersRaces;
