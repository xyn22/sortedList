import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  test('should create LinkedList', () => {
    const list = new LinkedList([1, 2, 3]);
    expect(list.length).toBe(3);
  });

  test('should insert value to LinkedList', () => {
    const list = new LinkedList([1, 2, 3]);
    list.insert(4);
    expect(list.length).toBe(4);
    expect([...list]).toEqual([1, 2, 3, 4]);
  });

  test('should insert value to LinkedList at specific position', () => {
    const list = new LinkedList([1, 2, 3]);
    list.insert(4, list.head?.next);
    expect(list.head?.next?.next?.value).toBe(4);
    expect([...list]).toEqual([1, 2, 4, 3]);
  });

  test('should shift value to LinkedList', () => {
    const list = new LinkedList([1, 2, 3]);
    list.shift(0);
    expect(list.head?.value).toBe(0);
    expect([...list]).toEqual([0, 1, 2, 3]);
  });
});