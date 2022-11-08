const checkIsNumber = require('./utils');

function getRectanglePerimeter(length, width) {
  if (checkIsNumber(length) || checkIsNumber(width)) {
    return console.log(`One or both parameters aren't numbers`);
  }
  return 2 * (length + width);
}

function getRectangleArea(length, width) {
  if (checkIsNumber(length) || checkIsNumber(width)) {
    return console.log(`One or both parameters aren't numbers`);
  }
  return length * width;
}

function getRectangleInfo(length, width) {
  const area = getRectangleArea(length, width);
  const perimeter = getRectanglePerimeter(length, width);
  return console.log(`The perimeter of a rectangle is ${perimeter} and the area is ${area}`);
}

module.exports = {
  getRectanglePerimeter,
  getRectangleArea,
  getRectangleInfo,
};
