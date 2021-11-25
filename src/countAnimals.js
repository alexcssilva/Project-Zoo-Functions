const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const totalSpecie = {};

  if (animal === undefined) {
    species.forEach((specie) => {
      totalSpecie[specie.name] = specie.residents.length;
    });
    return totalSpecie;
  }

  const numberSpecie = species.find((specie) => specie.name === animal.specie).residents;
  const sexSpecie = Object.values(animal);

  if (sexSpecie.length === 1) {
    return numberSpecie.length;
  }
  return numberSpecie.filter((specie) => specie.sex === sexSpecie[1]).length;
}

module.exports = countAnimals;
