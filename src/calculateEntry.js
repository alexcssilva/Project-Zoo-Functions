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
  // seu código aqui
}
console.log(countEntrants([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]
));
module.exports = { calculateEntry, countEntrants };
