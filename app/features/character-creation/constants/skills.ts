import { ClassType, InsertSkillType } from "@/app/db/schemas";

export const classSkills: (InsertSkillType & {
  class: ClassType["name"];
  skillByLevels: { level: number; description: string }[];
})[] = [
  {
    baseEffectDescription:
      "Vous donnez un coup de poing à votre adversaire et infligez +1d8 dégâts d’attaque.",
    name: "Coup de poing de bourrinard",
    mystheraCost: 2,
    class: "Guerrier",
    skillByLevels: [
      {
        level: 1,
        description: "Infligez +1d8 dégâts d’attaque.",
      },
      {
        level: 3,
        description: "Infligez +1d10 dégâts d’attaque.",
      },
    ],
  },
  {
    baseEffectDescription:
      "Lors de vos attaques de mêlée avec au moins une arme, vous obtenez un bonus de +1 en précision.",
    name: "Entraînement aux armes de mêlée",
    mystheraCost: 1,
    class: "Guerrier",
    skillByLevels: [
      {
        level: 1,
        description: "Bonus de +1 en précision.",
      },
      {
        level: 3,
        description: "Bonus de +1 en précision.",
      },
      {
        level: 5,
        description: "Bonus de +1 en précision.",
      },
      {
        level: 7,
        description: "Bonus de +1 en précision.",
      },
    ],
  },
  {
    baseEffectDescription:
      "Vous donnez un coup de poing à votre adversaire et infligez +1d8 dégâts d’attaque.",
    name: "Maîtrise des dagues",
    mystheraCost: 0,
    class: "Rôdeur",
    skillByLevels: [
      {
        level: 1,
        description: "+ 1 aux lancers de dague.",
      },
      {
        level: 3,
        description: "+2 aux lancers de dague.",
      },
    ],
  },
  {
    baseEffectDescription:
      "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
    name: "Ombre furtive",
    mystheraCost: 2,
    class: "Rôdeur",
    skillByLevels: [
      {
        level: 1,
        description:
          "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
      },
      {
        level: 3,
        description:
          "Vous devenez impossible à cibler pendant 1 tour. Cette action n’est pas réalisable si vous êtes immobilisé par quelque magie que ce soit.",
      },
    ],
  },
];
