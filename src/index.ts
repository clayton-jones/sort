import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { LinkedList } from './LinkedList';

// const numbers = new NumbersCollection([1, 4, -1, -20, 32, 10]);
// const sorter = new Sorter(numbers);

// sorter.sort();

// console.log(numbers.data);

const list = new LinkedList();

list.add(100);
list.add(24);
list.add(-10);
list.add(-3000);
list.add(2);

list.sort();

list.print();
