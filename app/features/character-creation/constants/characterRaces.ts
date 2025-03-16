import {
  BaseCaracteristicEffectTypes,
  InsertRaceType,
  InsertSkillType,
} from "@/app/db/schemas";
import { RaceCaracteristicsEnum } from "@/app/features/character-creation/constants/caracteristics";

type CharacterRacesType = (InsertRaceType & {
  baseCaracteristicsEffects: {
    name: RaceCaracteristicsEnum;
    effectType: BaseCaracteristicEffectTypes;
  }[];
  skills: InsertSkillType[];
})[];

const charactersRaces: CharacterRacesType = [
  {
    name: "Arkan Sonney",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
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
    skills: [],
  },
  {
    name: "Aknade",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
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
    skills: [
      {
        mystheraCost: 0,
        name: "Regard Infrarouge",
        baseEffectDescription: "Vous permet de voir dans le noir",
      },
      {
        mystheraCost: 1,
        name: "Traque du rampant",
        baseEffectDescription:
          "Cette capacité vous octroie un bonus de vitesse de déplacement de +2.",
      },
      {
        mystheraCost: 2,
        name: "Toxines de Naja",
        baseEffectDescription:
          "Vous crachez une toxine qui peut atteindre jusqu’à 2 mètres de distance sur une cible, infligeant 1d6 dégâts +1 dégât pendant 3 tours.",
      },
      {
        mystheraCost: 1,
        name: "Ramper et s’aggriper",
        baseEffectDescription:
          "Vous êtes capable de grimper sur des parois rocheuses ou boisées perpendiculaires au sol avec un bonus de +3.",
      },
      {
        mystheraCost: 3,
        name: "Souffle reptilien",
        baseEffectDescription:
          "Vous pouvez survivre jusqu’à 30 minutes dans l’eau. /5 minutes en combat.",
      },
      {
        mystheraCost: 1,
        name: "Immobilisation",
        baseEffectDescription:
          "Vous émettez des sons qui paralysent un adversaire pendant 1 à 3 tours en combat / 3 minutes hors combat.",
      },
      {
        mystheraCost: 0,
        name: "Réflexes colubridéens",
        baseEffectDescription:
          "Vous gagnez un bonus de race de +2 lorsqu’il s’agit de tests d’esquive.",
      },
      {
        mystheraCost: 0,
        name: "Sang froid",
        baseEffectDescription:
          "En tant que créature dotée de sang froid, vous gagnez un bonus de +2 lors de débats et nécessitant des tests.",
      },
      {
        mystheraCost: 2,
        name: "Ralliement Aknidien",
        baseEffectDescription:
          "Vous faites appel à un maximum de 3 petits serpents venimeux (jusqu’à 1 mètre) qui pourront vous aider pendant 10 minutes lors d’un combat.",
      },
      {
        mystheraCost: 2,
        name: "Mue",
        baseEffectDescription:
          "Vous renouvelez votre peau et vous régénère de 1d6+1 PV.",
      },
      {
        mystheraCost: 1,
        name: "Maîtrise du Basilic",
        baseEffectDescription:
          "Vous contrôlez et pouvez communiquer avec votre Basilic, qui est lié à vous.",
      },
    ],
  },
  {
    name: "Brumecendre",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Draconien",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Dryade",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Ellub",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Ellulu",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Evaros",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Feliarea",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Gaueko",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Géant",
    baseCaracteristicBonusPoints: 1,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Gobelin",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
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
        name: RaceCaracteristicsEnum.CELERITE,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
      {
        name: RaceCaracteristicsEnum.ENDURANCE,
        effectType: BaseCaracteristicEffectTypes.PENALTY,
      },
    ],
  },
  {
    name: "Semi-homme",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 0,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Humain (Xaldien/Varentien)",
    baseCaracteristicBonusPoints: 1,
    baseCaracteristicPenaltyPoints: 0,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Igarbam (homme-loutre)",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Korrigan",
    baseCaracteristicBonusPoints: 3,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Lamina",
    baseCaracteristicBonusPoints: 3,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Léviathid",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Nain",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Ogre bleu",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Orc",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Séraphin",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Subo",
    baseCaracteristicBonusPoints: 2,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
  {
    name: "Vaggatede",
    baseCaracteristicBonusPoints: 3,
    baseCaracteristicPenaltyPoints: 1,
    skills: [],
    baseCaracteristicsEffects: [
      {
        name: RaceCaracteristicsEnum.FORCE_BRUTE,
        effectType: BaseCaracteristicEffectTypes.BONUS,
      },
    ],
  },
];

export default charactersRaces;
