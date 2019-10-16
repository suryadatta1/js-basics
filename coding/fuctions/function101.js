let greetUser = function() {
  console.log("welcome user");
};
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

console.log(square(3));

let conversion = function(farenheit) {
  let celsius = ((farenheit - 32) * 5) / 9;
  console.log(celsius);
  let kelvin = ((farenheit + 459.67) * 5) / 9;
  console.log(kelvin);
};
conversion(52);
conversion(32);
