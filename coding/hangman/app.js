const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
const game1 = new Hangman("Car Parts", 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

getPuzzle("2")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(err);
  });

// getCountry("MX")
//   .then(country => console.log(country.name))
//   .catch(err => console.log(`Error:${err}`));




// fetch("http://puzzle.mead.io/puzzle", {})
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error("unable to fetch data");
//     }
//   })
//   .then(data => {
//     console.log(data.puzzle);
//   })
//   .catch(err => {
//     console.log(err);
//   });

getLocation()
  .then(location => getCountry(location.country))
  .then(country => console.log(country.name))
  .catch(err => console.log(`Error : ${err}`));
