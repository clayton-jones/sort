export class Sorter {
  constructor(public collection: /* TODO fix me */) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          // reference to left element
          const temp = this.collection[j];

          // swap elements using reference above
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = temp;
        }
      }
    }
  }
}