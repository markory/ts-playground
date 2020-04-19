class ArrayOfNumbers {
  constructor(public collection: number[]) {}
  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnaything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// interference
printAnaything<string>(['a', 'b', 'c']);

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a car');
  }
}

interface Printable {
  print(): void;
}

function printHouseOrCars<T extends Printable>(arr: T[]): void {
  for (let index = 0; index < arr.length; index++) {
    arr[index].print();
  }
}

printHouseOrCars<Printable>([new House(), new Car()]);
