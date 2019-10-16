let isAcoountLocked = false;

let userRole = "admin";

if (isAcoountLocked) {
  console.log("locked");
} else if (userRole === 'admin') {
  console.log("welcome admin");
} else {
  console.log("welcome");
}

let temp = 450;

if (temp <= 32) {
  console.log("freezing outside");
} else if (temp >= 110) {
  console.log("hot outside");
} else {
  console.log("fine outside");
}
