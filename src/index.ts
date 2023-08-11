export default class SortedList {
  #list: number[] = [];

  constructor(array: number[]) {
    this.#list = array.concat().sort((a, b) => a - b);
  }

  set(i: number, v: number) {
    if (i < 0 || i >= this.#list.length) {
      return;
    }
    const index = this.find(v, true);
    if (this.#list[index] === v) {
      const last = this.#findLastStartingFrom(index, v);
      
    }
  }

  insert(v: number) {
    const index = this.find(v, true);
    if (this.#list[index] === v) {
      return;
    }
    this.#list.splice(index, 0, v);
  }

  find(target: number, nearst = false) {
    if (!this.#list.length) return -1;
    let lower = 0;
    let upper = this.#list.length - 1;
    do {
      if (upper - lower === 1) {
        console.log('found', { lower, upper });
        if (this.#list[lower] === target) return lower;
        if (this.#list[upper] === target) return upper;
        if (nearst) {
          if (this.#list[lower] > target) {
            return lower;
          }
          return upper;
        }
        return -1;
      }
      if (upper === lower) {
        if (nearst || this.#list[upper] === target) {
          return upper;
        }
        return -1;
      }
      const midPoint = Math.ceil((lower + upper) / 2);
      console.log({ lower, upper, midPoint });
      const value = this.#list[midPoint];
      if (value === target) return midPoint;
      if (value < target) {
        lower = midPoint;
      } else {
        upper = midPoint;
      }
    } while (true);
  }

  #findLastStartingFrom(index: number, v: number) {
    let i;
    for (i = index + 1; i < this.#list.length; i += 1) {
      if (i > v) {
        return i - 1;
      }
    }
    return i;
  }

  list() {
    return this.#list;
  }
}
