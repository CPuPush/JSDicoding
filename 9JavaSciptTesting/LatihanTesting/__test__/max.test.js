const {findMax} = require('../max')
test('should return the max number between 3 arguments', () => {
    expect(findMax(1, 2, 3)).toBe(3);
    expect(findMax(5, 1, 2)).toBe(5);
    expect(findMax(102, 404, 48)).toBe(404);
    expect(findMax(-1, 0, -1)).toBe(0);
    expect(findMax(2, 2, 2)).toBe(2);
})