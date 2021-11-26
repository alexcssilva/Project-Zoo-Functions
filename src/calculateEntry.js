const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((person) => {
    if (person.age < 18) {
      child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const pricePerson = countEntrants(entrants);

  return (pricePerson.child * prices.child)
  + (pricePerson.adult * prices.adult)
  + (pricePerson.senior * prices.senior);
}

module.exports = { calculateEntry, countEntrants };
