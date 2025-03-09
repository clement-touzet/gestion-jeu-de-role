import {
  ClassType,
  InsertClassStatisticModifierTableType,
  StatisticType,
} from "@/app/db/schemas";

export const classStatisticsModifiers: {
  [x: ClassType["name"]]: {
    [x: StatisticType["name"]]: Omit<
      InsertClassStatisticModifierTableType,
      "characterClassId"
    >[];
  };
} = {
  Colosse: {
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
  "Clerc/Moine céleste": {
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
  Guerrier: {
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
  Barde: {
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
  Druide: {
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
  Rôdeur: {
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
  "Chasseur DE PRIMES / Tireur D’Elite": {
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
  Inventeur: {
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
  Mage: {
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
};
