const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`assertion passed ${actual} === ${expected}`)
  } else {console.log(`assertion failed ${actual} !=== ${expected}`)}
};

assertEqual("jeep", "car");
assertEqual(1, 1);