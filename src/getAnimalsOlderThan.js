const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nameSpecie = species.find((specie) => specie.name === animal);

  return nameSpecie.residents.every((specieAge) => specieAge.age > age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
