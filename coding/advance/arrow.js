const square = a => a * a;

const squareLong = a => {
  return a * a;
};
console.log(square(6));

const people = [
  {
    name: "nhihi",
    age: 25
  },
  {
    nmae: "njnkjnkjnkj",
    age: 30
  }
];
const under30 = people.filter(person => person.age < 30);
console.log(under30);

const person = people.find(person => person.age === 25);
console.log(person.name);
