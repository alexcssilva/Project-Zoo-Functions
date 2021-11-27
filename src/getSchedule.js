const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const daysZoo = Object.entries(hours);
const days = daysZoo.map((day) => day[0]);

function dayWeekZoo(hourPark) {
  const hourParkZoo = hourPark;
  daysZoo.forEach((element) => {
    let officeHour = `Open from ${element[1].open}am until ${element[1].close}pm`;
    let exhibition = species.filter((specie) => specie.availability.includes(element[0]))
      .map((allSpecie) => allSpecie.name);
    if (element[0] === 'Monday') {
      officeHour = 'CLOSED';
      exhibition = 'The zoo will be closed!';
    }
    hourParkZoo[element[0]] = {
      officeHour,
      exhibition,
    };
  });
  return hourPark;
}

function dayWeek(hourPark, day) {
  const { open, close } = hours[day];
  const hourParkZoo = hourPark;
  let officeHour = `Open from ${open}am until ${close}pm`;
  let exhibition = species.filter((specie) => specie.availability.includes(day))
    .map((allSpecie) => allSpecie.name);
  if (day === 'Monday') {
    officeHour = 'CLOSED';
    exhibition = 'The zoo will be closed!';
  }
  hourParkZoo[day] = {
    officeHour,
    exhibition,
  };
  return hourPark;
}

function getSchedule(scheduleTarget) {
  const hourPark = {};

  if (scheduleTarget === undefined) {
    return dayWeekZoo(hourPark);
  }
  const specieZoo = species.find((specie) => specie.name === scheduleTarget);
  if (specieZoo) {
    return [specieZoo].reduce((acc, day) => day.availability, []);
  }
  if (days.includes(scheduleTarget)) {
    return dayWeek(hourPark, scheduleTarget);
  }
  return dayWeekZoo(hourPark);
}

module.exports = getSchedule;
