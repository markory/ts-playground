import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkList';

const numberToSort = new NumbersCollection([10, 7, -5, 0]);
const sorter = new Sorter(numberToSort);
sorter.sort();
console.log(sorter.collection);

const characters = new CharactersCollection('Xaayb');
const charactersSort = new Sorter(characters);
charactersSort.sort();
console.log(charactersSort.collection);

const linkedlist = new LinkedList();
linkedlist.add(500);
linkedlist.add(-10);
linkedlist.add(-3);
linkedlist.add(4);

const sorterLinkedList = new Sorter(linkedlist);
sorterLinkedList.sort();
linkedlist.print();
