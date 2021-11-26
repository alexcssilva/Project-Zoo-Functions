const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeerId = employees.find((employeer) => employeer.id === id).responsibleFor[0];
  const specieId = species.find((specie) => specie.id === employeerId).residents;
  const specieAndEmployeer = specieId.sort((a, b) => b.age - a.age)[0];
  const { name, sex, age } = specieAndEmployeer;

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;

// Auxiliado por George Lucas - Turma 17 e Willian Alves - Turma 17
