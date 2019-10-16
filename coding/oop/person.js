class Person {
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }
  getBio() {
    let bio = `${this.firstName} ${this.lastName} is ${this.age}. `;
    this.likes.forEach(like => {
      bio += ` ${this.firstName} likes ${like}`;
    });
    return bio;
  }
  set fullName (fullName) {
    const name = fullName.split(" ");
    this.firstName = name[0];
    this.lastName = name[1];
  }
  get fullName (){
    return `${this.firstName} ${this.lastName}`
  }
}

class Employee extends Person {
  constructor(firstName, lastName, age, position, likes) {
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  getBio() {
    return `${this.fullName} ${this.position}`;
  }
  getYearsLeft() {
    return 65 - this.age;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super (firstName, lastName, age, likes)
    this.grade = grade
  }
  updateGrade(change){
    this.grade+= change
  }
  getBio(){
    const status = this.grade>=70?"Passing":"Failing"
    return `${this.firstName} is ${status} the class`
  }
}

const myPerson1 = new Student("Surya", "Datta", 22,88, ["Teaching,Biking"]);
myPerson1.fullName = "Rama Datta"
myPerson1.updateGrade(20);
console.log(myPerson1.getBio());

// const myPerson = new Person("Surya", "Datta", 22, ["Teaching,Biking"]);
// myPerson.setName("andrew mead");
// console.log(myPerson.getBio());

const person1 = new Employee("Rama", "Datta", 22, "Teacher", [
  "Teaching,Biking"
]);
console.log(person1.getBio());
console.log(person1.getYearsLeft());

// const Person = function(firstName, lastName, age, likes = []) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.likes = likes;
// };

// Person.prototype.getBio = function() {
//   let bio = `${this.firstName} ${this.lastName} is ${this.age}. `;
//   this.likes.forEach(like => {
//     bio += ` ${this.firstName} likes ${like}`;
//   });
//   return bio;
// };

// Person.prototype.setName = function(fullName) {
//   const name = fullName.split(" ");
//   this.firstName = name[0];
//   this.lastName = name[1];
// };

// const person1 = new Person("Surya", "Datta", 22, ["Teaching,Biking"]);

// person1.setName("andrew mead");
// console.log(person1.getBio());

// const person2 = new Person("Priyanka", "Tangirala", 21);

// console.log(person2.getBio());
