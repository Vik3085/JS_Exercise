const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};


person2 = {...personInfo}
console.log(id, person2);
console.log(id, personInfo);