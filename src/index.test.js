const { add } = require('./index');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('adds 5 + 7 to equal 12', () => {
    expect(add(5, 7)).toBe(12);
});

test('adds multiple numbers 1 + 2 + 3 to equal 6', () => {
    expect(add(1, 2, 3)).toBe(6);
});

test('adds zero to numbers should return the same number', () => {
    expect(add(0, 4, 8)).toBe(12);
});

test('adds negative numbers correctly', () => {
    expect(add(-3, -2, 5)).toBe(0);
});
