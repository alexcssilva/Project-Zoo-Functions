const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const subordinates = employees.filter((employee) =>
      employee.managers.some((x) => x === managerId));
    return subordinates.map(
      (subord) => `${subord.firstName} ${subord.lastName}`,
    );
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };

// Jonatas Lima - Turma 17 e Willian Alves - Turma 17
