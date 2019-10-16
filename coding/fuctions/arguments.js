let add = function(a, b) {
  return a + b;
};
console.log(add(4, 5));

let getScoreText = function(name = "Anonymous", score = 0) {
  return `Name: ${name} - Score: ${score}`;
};
console.log(getScoreText("Surya", 99));

let tipClaculator = function(total, tipPrecent = 0.2) {
  let percent = tipPrecent * 100;
  let tip = total * tipPrecent;
  return `A ${percent}% tip on ${total} would be ${tip}`;
};
console.log(tipClaculator(100, 0.25));
