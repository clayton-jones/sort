class Node {
  next: Node | null = null;
  constructor(public val: number) {}
}

export class LinkedList {
  head: Node | null = null;
  length: number = 0;

  add(val: number): void {
    const node = new Node(val);
    this.length += 1;

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }
    tail.next = node;
  }

  at(idx: number): Node {
    if (!this.head) {
      throw new Error('index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === idx) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('index out of bounds');
  }

  compare(leftIdx: number, rightIdx: number): boolean {
    if (!this.head) throw new Error('List is empty');

    return this.at(leftIdx).val > this.at(rightIdx).val;
  }

  swap(leftIdx: number, rightIdx: number): void {
    const leftNode = this.at(leftIdx);
    const rightNode = this.at(rightIdx);

    const leftVal = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = leftVal;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    let str = '';

    while (node) {
      str += `${node.val} -> `;
      node = node.next;
    }

    str += 'null';

    console.log(str, 'HELLO');
  }
}
