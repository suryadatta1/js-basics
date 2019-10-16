// const myAge = 27;
// const message = myAge >= 18 ? "you can vote" : "you cant vote";
// console.log(message);

const myAge = 20;
const showPage = () => {
  console.log("showing the page");
};
const showErrorPage = () => {
  console.log("showing the Error page");
};

myAge >= 21 ? showPage() : showErrorPage();

const team = ["tyler", "porter"];
console.log(
  team.length <= 4 ? `team size:${team.length}` : `too many people on your team`
);
