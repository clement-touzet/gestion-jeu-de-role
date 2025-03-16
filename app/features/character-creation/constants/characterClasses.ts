import {
  ClassType,
  InsertClassType,
  InsertSkillByLevelType,
  InsertSkillType,
  InsertStatisticModifierType,
  StatisticType,
} from "@/app/db/schemas";

enum ClassesEnum {
  COLOSSE = "Colosse",
  MOINE_CELESTE = "Clerc/Moine céleste",
  GUERRIER = "Guerrier",
  BARDE = "Barde",
  DRUIDE = "Druide",
  RODEUR = "Rôdeur",
  TIREUR_D_ELITE = "Chasseur DE PRIMES / Tireur D’Elite",
  INVENTEUR = "Inventeur",
  MAGE = "Mage",
}

export const classSkills: {
  [className: ClassType["name"]]: InsertClassType & {
    skills: {
      skill: InsertSkillType;
      skillByLevels: Omit<InsertSkillByLevelType, "skillId">[];
    }[];
    classStatisticsModifiers: {
      [x: StatisticType["name"]]: Omit<
        InsertStatisticModifierType,
        "statisticId"
      >[];
    };
  };
} = {
  [ClassesEnum.BARDE]: {
    name: ClassesEnum.BARDE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 12,
        },
        {
          level: 2,
          statisticValue: 14,
        },
        {
          level: 3,
          statisticValue: 15,
        },
        {
          level: 4,
          statisticValue: 20,
        },
        {
          level: 5,
          statisticValue: 22,
        },
        {
          level: 6,
          statisticValue: 25,
        },
        {
          level: 7,
          statisticValue: 29,
        },
        {
          level: 8,
          statisticValue: 32,
        },
        {
          level: 9,
          statisticValue: 38,
        },
        {
          level: 10,
          statisticValue: 46,
        },
        {
          level: 11,
          statisticValue: 51,
        },
        {
          level: 12,
          statisticValue: 60,
        },
        {
          level: 13,
          statisticValue: 73,
        },
        {
          level: 14,
          statisticValue: 87,
        },
        {
          level: 15,
          statisticValue: 92,
        },
        {
          level: 16,
          statisticValue: 103,
        },
        {
          level: 17,
          statisticValue: 115,
        },
        {
          level: 18,
          statisticValue: 120,
        },
        {
          level: 19,
          statisticValue: 124,
        },
        {
          level: 20,
          statisticValue: 130,
        },
      ],
    },
    skills: [],
  },
  [ClassesEnum.COLOSSE]: {
    name: ClassesEnum.COLOSSE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 17,
        },
        {
          level: 2,
          statisticValue: 20,
        },
        {
          level: 3,
          statisticValue: 21,
        },
        {
          level: 4,
          statisticValue: 26,
        },
        {
          level: 5,
          statisticValue: 29,
        },
        {
          level: 6,
          statisticValue: 34,
        },
        {
          level: 7,
          statisticValue: 38,
        },
        {
          level: 8,
          statisticValue: 42,
        },
        {
          level: 9,
          statisticValue: 49,
        },
        {
          level: 10,
          statisticValue: 59,
        },
        {
          level: 11,
          statisticValue: 65,
        },
        {
          level: 12,
          statisticValue: 78,
        },
        {
          level: 13,
          statisticValue: 90,
        },
        {
          level: 14,
          statisticValue: 100,
        },
        {
          level: 15,
          statisticValue: 110,
        },
        {
          level: 16,
          statisticValue: 120,
        },
        {
          level: 17,
          statisticValue: 132,
        },
        {
          level: 18,
          statisticValue: 140,
        },
        {
          level: 19,
          statisticValue: 155,
        },
        {
          level: 20,
          statisticValue: 170,
        },
      ],
      mistera: [],
    },
    skills: [],
  },
  [ClassesEnum.DRUIDE]: {
    name: ClassesEnum.DRUIDE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 11,
        },
        {
          level: 2,
          statisticValue: 13,
        },
        {
          level: 3,
          statisticValue: 14,
        },
        {
          level: 4,
          statisticValue: 18,
        },
        {
          level: 5,
          statisticValue: 20,
        },
        {
          level: 6,
          statisticValue: 23,
        },
        {
          level: 7,
          statisticValue: 25,
        },
        {
          level: 8,
          statisticValue: 28,
        },
        {
          level: 9,
          statisticValue: 33,
        },
        {
          level: 10,
          statisticValue: 44,
        },
        {
          level: 11,
          statisticValue: 44,
        },
        {
          level: 12,
          statisticValue: 52,
        },
        {
          level: 13,
          statisticValue: 63,
        },
        {
          level: 14,
          statisticValue: 75,
        },
        {
          level: 15,
          statisticValue: 80,
        },
        {
          level: 16,
          statisticValue: 90,
        },
        {
          level: 17,
          statisticValue: 95,
        },
        {
          level: 18,
          statisticValue: 100,
        },
        {
          level: 19,
          statisticValue: 110,
        },
        {
          level: 20,
          statisticValue: 115,
        },
      ],
    },
    skills: [],
  },
  [ClassesEnum.GUERRIER]: {
    name: ClassesEnum.GUERRIER,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 14,
        },
        {
          level: 2,
          statisticValue: 16,
        },
        {
          level: 3,
          statisticValue: 18,
        },
        {
          level: 4,
          statisticValue: 23,
        },
        {
          level: 5,
          statisticValue: 25,
        },
        {
          level: 6,
          statisticValue: 28,
        },
        {
          level: 7,
          statisticValue: 32,
        },
        {
          level: 8,
          statisticValue: 35,
        },
        {
          level: 9,
          statisticValue: 41,
        },
        {
          level: 10,
          statisticValue: 50,
        },
        {
          level: 11,
          statisticValue: 58,
        },
        {
          level: 12,
          statisticValue: 68,
        },
        {
          level: 13,
          statisticValue: 85,
        },
        {
          level: 14,
          statisticValue: 95,
        },
        {
          level: 15,
          statisticValue: 105,
        },
        {
          level: 16,
          statisticValue: 115,
        },
        {
          level: 17,
          statisticValue: 125,
        },
        {
          level: 18,
          statisticValue: 135,
        },
        {
          level: 19,
          statisticValue: 145,
        },
        {
          level: 20,
          statisticValue: 155,
        },
      ],
    },
    skills: [
      {
        skill: {
          name: "Coup de poing de bourrinard",
          baseEffectDescription:
            "Vous donnez un coup de poing à votre adversaire et infligez +1d8 dégâts d’attaque.",
          mystheraCost: 2,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription: "Infligez +1d8 dégâts d’attaque.",
          },
          {
            level: 3,
            effectDescription: "Infligez +1d10 dégâts d’attaque.",
          },
        ],
      },
      {
        skill: {
          name: "Entraînement aux armes de mêlée",
          baseEffectDescription:
            "Lors de vos attaques de mêlée avec au moins une arme, vous obtenez un bonus de +1 en précision.",
          mystheraCost: 1,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription: "Bonus de +1 en précision.",
          },
          {
            level: 3,
            effectDescription: "Bonus de +1 en précision.",
          },
          {
            level: 5,
            effectDescription: "Bonus de +1 en précision.",
          },
          {
            level: 7,
            effectDescription: "Bonus de +1 en précision.",
          },
        ],
      },
    ],
  },
  [ClassesEnum.INVENTEUR]: {
    name: ClassesEnum.INVENTEUR,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 9,
        },
        {
          level: 2,
          statisticValue: 10,
        },
        {
          level: 3,
          statisticValue: 11,
        },
        {
          level: 4,
          statisticValue: 15,
        },
        {
          level: 5,
          statisticValue: 16,
        },
        {
          level: 6,
          statisticValue: 18,
        },
        {
          level: 7,
          statisticValue: 20,
        },
        {
          level: 8,
          statisticValue: 23,
        },
        {
          level: 9,
          statisticValue: 27,
        },
        {
          level: 10,
          statisticValue: 33,
        },
        {
          level: 11,
          statisticValue: 36,
        },
        {
          level: 12,
          statisticValue: 43,
        },
        {
          level: 13,
          statisticValue: 52,
        },
        {
          level: 14,
          statisticValue: 62,
        },
        {
          level: 15,
          statisticValue: 65,
        },
        {
          level: 16,
          statisticValue: 74,
        },
        {
          level: 17,
          statisticValue: 85,
        },
        {
          level: 18,
          statisticValue: 91,
        },
        {
          level: 19,
          statisticValue: 96,
        },
        {
          level: 20,
          statisticValue: 100,
        },
      ],
    },
    skills: [],
  },
  [ClassesEnum.MAGE]: {
    name: ClassesEnum.MAGE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 8,
        },
        {
          level: 2,
          statisticValue: 9,
        },
        {
          level: 3,
          statisticValue: 10,
        },
        {
          level: 4,
          statisticValue: 13,
        },
        {
          level: 5,
          statisticValue: 14,
        },
        {
          level: 6,
          statisticValue: 16,
        },
        {
          level: 7,
          statisticValue: 18,
        },
        {
          level: 8,
          statisticValue: 21,
        },
        {
          level: 9,
          statisticValue: 25,
        },
        {
          level: 10,
          statisticValue: 30,
        },
        {
          level: 11,
          statisticValue: 33,
        },
        {
          level: 12,
          statisticValue: 37,
        },
        {
          level: 13,
          statisticValue: 43,
        },
        {
          level: 14,
          statisticValue: 48,
        },
        {
          level: 15,
          statisticValue: 55,
        },
        {
          level: 16,
          statisticValue: 59,
        },
        {
          level: 17,
          statisticValue: 67,
        },
        {
          level: 18,
          statisticValue: 75,
        },
        {
          level: 19,
          statisticValue: 84,
        },
        {
          level: 20,
          statisticValue: 90,
        },
      ],
    },
    skills: [],
  },
  [ClassesEnum.MOINE_CELESTE]: {
    name: ClassesEnum.MOINE_CELESTE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 13,
        },
        {
          level: 2,
          statisticValue: 15,
        },
        {
          level: 3,
          statisticValue: 16,
        },
        {
          level: 4,
          statisticValue: 20,
        },
        {
          level: 5,
          statisticValue: 22,
        },
        {
          level: 6,
          statisticValue: 27,
        },
        {
          level: 7,
          statisticValue: 34,
        },
        {
          level: 8,
          statisticValue: 37,
        },
        {
          level: 9,
          statisticValue: 40,
        },
        {
          level: 10,
          statisticValue: 48,
        },
        {
          level: 11,
          statisticValue: 53,
        },
        {
          level: 12,
          statisticValue: 65,
        },
        {
          level: 13,
          statisticValue: 80,
        },
        {
          level: 14,
          statisticValue: 92,
        },
        {
          level: 15,
          statisticValue: 97,
        },
        {
          level: 16,
          statisticValue: 104,
        },
        {
          level: 17,
          statisticValue: 112,
        },
        {
          level: 18,
          statisticValue: 120,
        },
        {
          level: 19,
          statisticValue: 130,
        },
        {
          level: 20,
          statisticValue: 140,
        },
      ],
    },
    skills: [],
  },
  [ClassesEnum.RODEUR]: {
    name: ClassesEnum.RODEUR,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 10,
        },
        {
          level: 2,
          statisticValue: 11,
        },
        {
          level: 3,
          statisticValue: 12,
        },
        {
          level: 4,
          statisticValue: 16,
        },
        {
          level: 5,
          statisticValue: 18,
        },
        {
          level: 6,
          statisticValue: 21,
        },
        {
          level: 7,
          statisticValue: 23,
        },
        {
          level: 8,
          statisticValue: 26,
        },
        {
          level: 9,
          statisticValue: 31,
        },
        {
          level: 10,
          statisticValue: 37,
        },
        {
          level: 11,
          statisticValue: 41,
        },
        {
          level: 12,
          statisticValue: 48,
        },
        {
          level: 13,
          statisticValue: 60,
        },
        {
          level: 14,
          statisticValue: 72,
        },
        {
          level: 15,
          statisticValue: 75,
        },
        {
          level: 16,
          statisticValue: 82,
        },
        {
          level: 17,
          statisticValue: 87,
        },
        {
          level: 18,
          statisticValue: 92,
        },
        {
          level: 19,
          statisticValue: 98,
        },
        {
          level: 20,
          statisticValue: 105,
        },
      ],
    },
    skills: [
      {
        skill: {
          name: "Maîtrise des dagues",
          baseEffectDescription: "+1 aux lancers de dagues.",
          mystheraCost: 0,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription: "+ 1 aux lancers de dague.",
          },
          {
            level: 3,
            effectDescription: "+2 aux lancers de dague.",
          },
          {
            level: 5,
            effectDescription: "+2 aux lancers de dague.",
          },
          {
            level: 7,
            effectDescription: " +3 aux lancers de dague.",
          },
          {
            level: 9,
            effectDescription: "+3 aux lancers de dague.",
          },
          {
            level: 11,
            effectDescription: " +4 aux lancers de dague. +3dégâts par coup.",
          },
          {
            level: 13,
            effectDescription: " +4 aux lancers de dague. +4 dégâts par coup.",
          },
          {
            level: 15,
            effectDescription: "+4 aux lancers de dague. +5 dégâts par coup.",
          },
          {
            level: 17,
            effectDescription: "+4 aux lancers de dague. +6 dégâts par coup.",
          },
          {
            level: 19,
            effectDescription: "+5 aux lancers de dague. +7 dégâts par coup.",
          },
        ],
      },
      {
        skill: {
          name: "Ombre furtive",
          baseEffectDescription:
            "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
          mystheraCost: 2,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription:
              "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
          },
          {
            level: 3,
            effectDescription:
              "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
          },
        ],
      },
      {
        skill: {
          name: "Diversion",
          baseEffectDescription:
            "Le rôdeur peut distraire ses ennemis en créant des bruits ou en lançant des objets, les poussant à s'éloigner de leur poste ou à se tourner dans la mauvaise direction. Si vous avez l'état 'dissimulé', vous obtenez un bonus de +1 en escamotage/lancer/attaque à distance/combat de mêlée/force brute.",
          mystheraCost: 1,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription:
              "Bonus de +1 en escamotage/lancer/attaque à distance/combat de mêlée/force brute.",
          },
          {
            level: 3,
            effectDescription:
              "Bonus de +1 en escamotage/lancer/attaque à distance/combat de mêlée/force brute.",
          },
        ],
      },

      {
        skill: {
          name: "Brume épaisse",
          baseEffectDescription:
            "Vous envoyez des billes fumigènes qui aveuglent les ennemis dans une zone de 6x6 pendant deux tours. Ces derniers ont alors un malus de -2 en précision pour chacune de leurs attaques.",
          mystheraCost: 2,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription:
              "Vous envoyez des billes fumigènes qui aveuglent les ennemis dans une zone de 6x6 pendant deux tours. Ces derniers ont alors un malus de -2 en précision pour chacune de leurs attaques.",
          },
          {
            level: 3,
            effectDescription:
              "Zone de 7x7 pendant deux tours. Malus de -2 en précision pour chacune de leurs attaques.",
          },
        ],
      },

      {
        skill: {
          name: "Pas légers",
          baseEffectDescription:
            "Le voleur/assassin est un maître de la discrétion. Il peut se déplacer sans faire de bruit, évitant les pièges et les gardes pour atteindre des endroits inaccessibles. Vous gagnez un bonus de +X lors de votre prochaine action de discrétion en mouvement quand vous êtes dans un lieu sombre/peu éclairé.",
          mystheraCost: 2,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription: "Bonus de +1",
          },
          {
            level: 3,
            effectDescription: "Bonus de +2.",
          },
        ],
      },
      {
        skill: {
          name: "Dans le mile",
          baseEffectDescription:
            "Vous pouvez obtenir un bonus de +2 à votre prochain test de tir à distance ou attaque de mêlée.",
          mystheraCost: 2,
        },
        skillByLevels: [
          {
            level: 1,
            effectDescription: "Bonus de +2.",
          },
          {
            level: 3,
            effectDescription: "Bonus de +3.",
          },
        ],
      },
    ],
  },

  [ClassesEnum.TIREUR_D_ELITE]: {
    name: ClassesEnum.TIREUR_D_ELITE,
    classStatisticsModifiers: {
      life: [
        {
          level: 1,
          statisticValue: 9,
        },
        {
          level: 2,
          statisticValue: 10,
        },
        {
          level: 3,
          statisticValue: 11,
        },
        {
          level: 4,
          statisticValue: 15,
        },
        {
          level: 5,
          statisticValue: 16,
        },
        {
          level: 6,
          statisticValue: 18,
        },
        {
          level: 7,
          statisticValue: 20,
        },
        {
          level: 8,
          statisticValue: 23,
        },
        {
          level: 9,
          statisticValue: 27,
        },
        {
          level: 10,
          statisticValue: 33,
        },
        {
          level: 11,
          statisticValue: 36,
        },
        {
          level: 12,
          statisticValue: 43,
        },
        {
          level: 13,
          statisticValue: 52,
        },
        {
          level: 14,
          statisticValue: 62,
        },
        {
          level: 15,
          statisticValue: 65,
        },
        {
          level: 16,
          statisticValue: 74,
        },
        {
          level: 17,
          statisticValue: 85,
        },
        {
          level: 18,
          statisticValue: 91,
        },
        {
          level: 19,
          statisticValue: 96,
        },
        {
          level: 20,
          statisticValue: 100,
        },
      ],
    },
    skills: [],
  },
};
