const add = () => {
  return arguments[0] + arguments[1];
};

console.log(add(11, 26, 23, 24));

const car = {
  color: "red",
  getSummary() {
    return `the car is ${this.color}`;
  }
};
console.log(car.getSummary());
