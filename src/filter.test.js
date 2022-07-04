import {filter} from './filter.js';

describe('Фильтр массива по свойству', () => {
  let objects = [
    { login: 'Maks', email: 'maks@maks.com', company: 'METHED' },
    { login: 'Methed', email: 'info@methed.ru', company: 'METHED' },
    { login: 'Humidor', email: 'tomato@pomodoro.com', company: 'cucumber' }
]

  it('Одно совпадение по email', () => {
    const expected = [objects[1]];
    const filtered = filter(objects, 'email', 'info@methed.ru');

    expect(filtered.length === expected.length).toBe(true)
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  it('Несколько совпадений по company', () => {
    const expected = [objects[0], objects[1]];
    const filtered = filter(objects, 'company', 'METHED');

    expect(filtered.length === expected.length).toBe(true)
    for (const i in filtered) {
      expect(expected[i] === filtered[i]).toBe(true);
    }
  });

  // it('Нет пустых свойств company', () => {
  //   const expected = [objects[0], objects[1], objects[2], objects[3]];
  //   const filtered = filter(objects, 'company', '');

  //   expect(filtered.length === expected.length).toBe(true)
  //   for (const i in filtered) {
  //     expect(expected[i] === filtered[i]).toBe(true);
  //   }
  // });

  // it('Есть пустое свойство email', () => {
  //   const expected = [objects[0], objects[1], objects[2], objects[3]];
  //   const filtered = filter(objects, 'email', '');

  //   expect(filtered.length === expected.length).toBe(true)
  //   for (const i in filtered) {
  //     expect(expected[i] === filtered[i]).toBe(true);
  //   }
  // });
});
