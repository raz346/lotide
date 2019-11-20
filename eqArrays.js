const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`assertion passed ${actual} === ${expected}`)
  } else {console.log(`assertion failed ${actual} !=== ${expected}`)}
};

const eqArrays = (a, b) => {
  if (a.sort().toString() == b.sort().toString()) {
    return true;
  } else return false;
};

const fruits = {
  apple: 28,
  orange: 17,
  pear: 54,
};

const values = Object.values(fruits);

for (const value of values) {
  console.log(value)
};