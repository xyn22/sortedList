export class Node {
  value: number;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export default class LinkedList {
  #head: Node | null = null;
  #tail: Node | null = null;
  #length = 0;

  constructor(array: number[]) {
    array.forEach((v) => {
      this.insert(v);
    });
  }

  shift(value: number) {
    const node = new Node(value);
    node.next = this.#head;
    this.#head = node;
    this.#length += 1;
  }

  insert(v: number, prevNode: Node | null = null) {
    const node = new Node(v);
    if (!this.#head) {
      this.#head = node;
      this.#tail = node;
      this.#head.next = this.#tail;
    } else {
      if (prevNode) {
        node.next = prevNode.next;
        prevNode.next = node;
        if (prevNode === this.#tail) {
          this.#tail = node;
        }
      } else if (this.#tail) {
        this.#tail.next = node;
        this.#tail = node;
      } else {
        throw new Error('tail is null');
      }
    }
    this.#length += 1;
  }

  get length() {
    return this.#length;
  }

  get head() {
    return this.#head;
  }

  [Symbol.iterator]() {
    let node = this.#head;
    return {
      next: () => {
        if (!node) {
          return { done: true, value: null };
        }
        const value = node.value;
        node = node.next;
        return { done: false, value };
      },
    };
  };
}