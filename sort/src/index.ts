import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkList';

const numberToSort = new NumbersCollection([10, 7, -5, 0]);
numberToSort.sort();
console.log(numberToSort);

const characters = new CharactersCollection('Xaayb');
characters.sort();
console.log(characters);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);
linkedlist.sort();
linkedlist.print();
