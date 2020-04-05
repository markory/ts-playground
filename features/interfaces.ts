interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const reportableDrink = {
    color: 'brown',
    carbondated:true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`;
    }
}

const printSummary = (item: Reportable): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken: ${vehicle.broken}`);
  console.log(`Vehicle: ${item.summary()}`);
};

printSummary(oldCivic);
printSummary(reportableDrink)