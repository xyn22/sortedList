import LinkedList,{ Node } from './LinkedList';

export default class SortedList {
  #list: LinkedList;

  constructor(array: number[]) {
    this.#list = new LinkedList(array.concat().sort((a, b) => a - b));
  }

  insert(value: number) {
    const nearst = this.find(value, true);
    this.#list.insert(value, nearst);
  }

  find(target: number, nearst = false) {
    let node = this.#list.head;
    let prev = null;
    while (node) {
      if (node.value === target) {
        return node;
      }
      if (node.value > target) {
        return nearst ? prev : null;
      }
      prev = node;
      node = node.next;
    }
    return null;
  }

  [Symbol.iterator]() {
    return this.#list[Symbol.iterator]();
  };
}
