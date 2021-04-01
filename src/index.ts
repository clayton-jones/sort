import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbers = new NumbersCollection([1, 4, -1, -20, 32, 10]);
const sorter = new Sorter(numbers);

sorter.sort();

console.log(numbers.data);
