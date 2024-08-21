type PriceData = {
  [key: string]: number;
};

type LessonPrices = {
  solo: PriceData;
  duo: PriceData;
  group: PriceData;
};

const kitePrices: LessonPrices = {
  solo: {
    "1": 60,
    "2": 120,
    "4": 230,
    "6": 330,
    "8": 420,
    "10": 500,
  },
  duo: {
    "1": 40,
    "2": 80,
    "4": 150,
    "6": 220,
    "8": 285,
    "10": 345,
  },
  group: {
    "1": 30,
    "2": 49,
    "4": 100,
    "6": 145,
    "8": 190,
    "10": 220,
  },
};

const surfPrices: LessonPrices = {
  solo: {
    "1": 30,
    "2": 60,
    "4": 100,
    "6": 140,
    "8": 170,
    "10": 200,
  },
  duo: {
    "1": 25,
    "2": 40,
    "4": 75,
    "6": 100,
    "8": 120,
    "10": 140,
  },
  group: {
    "1": 15,
    "2": 25,
    "4": 45,
    "6": 75,
    "8": 96,
    "10": 110,
  },
};

const wingPrices: LessonPrices = {
  solo: {
    "1": 80,
    "2": 150,
    "4": 280,
    "6": 400,
    "8": 515,
    "10": 610,
  },
  duo: {
    "1": 60,
    "2": 100,
    "4": 190,
    "6": 270,
    "8": 340,
    "10": 410,
  },
  group: {
    "1": 40,
    "2": 80,
    "4": 150,
    "6": 220,
    "8": 285,
    "10": 345,
  },
};

export { wingPrices, surfPrices, kitePrices };
