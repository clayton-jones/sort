class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}

const sorter = new Sorter([1, 4, -1, -20, 32, 10]);

sorter.sort();
