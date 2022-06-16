const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const objFilter = Object.entries(person).filter(([key, value]) => typeof value === 'number');
const arrayToObj = Object.fromEntries(objFilter);

const json = JSON.stringify(arrayToObj);

console.log(arrayToObj); // Should return: { id: 1, age: 25 }