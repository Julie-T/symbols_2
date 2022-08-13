import Team2 from '../app';

test('Итератор героев', () => {
  Team2.iterator().next();
  Team2.iterator().next();
  expect(Team2.iterator().next()).toEqual({
    value: 'undefined',
    done: true,
  });
});
