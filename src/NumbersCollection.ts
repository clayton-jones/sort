export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx] > this.data[rightIdx];
  }

  swap(leftIdx: number, rightIdx: number): void {
    // reference for right element
    const temp = this.data[rightIdx];

    this.data[rightIdx] = this.data[leftIdx];
    this.data[leftIdx] = temp;
  }
}
