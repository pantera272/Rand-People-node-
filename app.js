const fs = require('fs');

const gender = ['M', 'F'];
const firstNameF = ['Adela', 'Adelajda', 'Adria', 'Adriana', 'Adrianna', 'Agata', 'Agnieszka', 'Aida', 'Alana', 'Alberta'];
const firstNameM = ['Baldwin', 'Baltazar', 'Barabasz', 'Barnaba', 'Barnim', 'Bartłomiej', 'Bartosz', 'Bazyli', 'Beat', 'Beda'];
const lastName = ['Kowalski', 'Sroka', 'Kuska', 'Pawłowski', 'Brożek'];
const people = [];
const ageMin = 18;
const ageMax = 78;

const randChoice = (arr) => {
  const random = Math.floor(Math.random()*arr.length);
  const item = arr[random];
  return item;
}

const randAge = (min, max) => {
  const age = Math.floor(Math.random() * (max - min + 1)) + min;
  return age;
}

for (i=0; i<20; i++){
  const user = {}
  const genderRand = randChoice(gender);
  
  user.gender = genderRand;
  user.gender == 'F' ? user.firstName = randChoice(firstNameF) : user.firstName = randChoice(firstNameM);
  user.lastName = randChoice(lastName);
  user.age = randAge(ageMin, ageMax);

  people.push(user);
}

const json = JSON.stringify(people);

fs.writeFile('people.txt', json, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
