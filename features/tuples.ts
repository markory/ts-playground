const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
// tuple avoid re-ordering
// pepsi[0] = 40;
// pepsi[2] = 'brown';

const carSpecs: [number, number] = [400, 4454];
const carStats = {
  horsepower: 400,
  weight: 4454,
};
