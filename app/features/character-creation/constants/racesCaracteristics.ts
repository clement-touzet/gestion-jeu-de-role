type RacesCaracteristicsType = {
  [caracteristicType: string]: {
    label: string;
    caracteristics: string[];
  };
};

export const racesCaracteristics: RacesCaracteristicsType = {
  spirit: {
    label: "Esprit",
    caracteristics: [
      "Connaissances historiques",
      "Connaissances linguistiques",
      "Connaissances magiques",
      "Religion",
      "Résistance magique",
      "Incantation",
      "Sciences formelles",
      "Cuisine",
      "Alchimie",
      "Sagesse",
    ],
  },
  physical: {
    label: "Physique",
    caracteristics: [
      "Chasse",
      "Force brute",
      "Acrobaties",
      "Escalade",
      "Lancer",
      "Célérité",
      "Nage",
      "Endurance",
      "Attaque de mêlée",
      "Vol",
      "Perception",
    ],
  },
  charisme: {
    label: "Charisme",
    caracteristics: [
      "Négociation",
      "Persuasion",
      "Intimidation",
      "Représentation",
      "Séduction",
      "Commandement",
      "Dressage",
      "Mensonge",
      "Sang-froid",
    ],
  },
  dexterity: {
    label: "Dextérité",
    caracteristics: [
      "Escamotage",
      "Ingénierie",
      "Dissimulation",
      "Artisanat",
      "Soin",
      "Equitation",
      "Navigation",
      "Tir à distance",
      "Pistage",
      "Jeu",
    ],
  },
};
