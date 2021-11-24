const { employees } = require("../data/zoo_data");
const data = require("../data/zoo_data");

function getEmployeeByName(employeeName) {
  const emploName = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName
  );
  if (emploName === undefined) {
    return {};
  }
  return emploName;
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
