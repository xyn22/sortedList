import { describe } from 'node:test';
import SortedList from './index';
import * as exp from 'node:constants';

describe('SortedList', () => {
  it('should work', () => {
    const list = new SortedList([296208, 451673, 1965200, 367353]);
    list.insert(326208);
    expect(list.list()).toEqual([296208, 326208, 367353, 451673, 1965200]);
  });
});
