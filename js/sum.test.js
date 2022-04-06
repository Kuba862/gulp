const sum = require('./sum');

test('dodawanie 1 + 2 powinno wyniosić 3', () => {
    expect(sum(1,2)).toBe(3);
});