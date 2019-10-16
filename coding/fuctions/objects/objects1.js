let myBook = {
  title: "1984",
  author: "george",
  pageCoun: 328
};
console.log(`${myBook.title} by ${myBook.author}`);

let person = {
  name: "surya",
  age: 22,
  location: "india"
};
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
person.age = person.age-1; 
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
