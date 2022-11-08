const { getRectanglePerimeter, getRectangleArea, getRectangleInfo } = require('../js/rectangle');

test('should return perimeter of rectangle(number)', () => {
  expect(getRectanglePerimeter(1, 2)).toBe(6);
});

test('should return area of rectangle(number)', () => {
  expect(getRectangleArea(1, 2)).toBe(2);
});

test('should output string in console.log', () => {
  expect(getRectangleInfo(1, 2)).toBe(
    console.log(
      `The perimeter of a rectangle is ${getRectanglePerimeter(
        1,
        2,
      )} and the area is ${getRectangleArea(1, 2)}`,
    ),
  );
});
