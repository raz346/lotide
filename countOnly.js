const countOnly = (allItems, itemsToCount) => {
  const results = {};
  allItems.forEach(function(element) {
    if (itemsToCount[element]) {
    if (results[element]) {
      results[element] += 1;
    } else {results[element] = 1;}
    }
  });
  return results;
};

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`assertion passed ${actual} === ${expected}`)
  } else {console.log(`assertion failed ${actual} !=== ${expected}`)}
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);