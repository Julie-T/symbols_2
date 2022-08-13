import Team2 from '../app';

test('Итератор героев', () => {
  Team2.iterator().next();
  Team2.iterator().next();
  Team2.iterator().next();
  expect(Team2.iterator().next()).toEqual([{
    value: {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
    done: false,
  },
  {
    value: {
      name: 'Маг',
      type: 'Wizard',
      health: 40,
      level: 1,
      attack: 30,
      defence: 20,
    },
    done: false,
  },
  {
    value: 'undefined',
    done: true,
  }]);
});
