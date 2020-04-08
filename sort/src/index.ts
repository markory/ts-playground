import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numberToSort = new NumbersCollection([10, 7, -5, 0]);
const sorter = new Sorter(numberToSort);
sorter.sort();
console.log(sorter.collection);

const characters = new CharactersCollection('Xaayb');
const charactersSort = new Sorter(characters);
charactersSort.sort();
console.log(charactersSort.collection);
