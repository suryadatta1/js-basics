let myBook = {
    title: "1984",
    author: "george",
    pageCount: 328
  };

  let otherBook = {
    title: "nukjhkj",
    author: "george john",
    pageCount: 3330
  };

  let getBook = function(book){
      return{
          summaray:  `${book.title} by ${book.author}`
      }
  }
 console.log (getBook(myBook));

 let convertTemp = function (farenheit){
     return {
         farenheit:farenheit,
         kelvin:(farenheit - 459.67) * (5 / 9),
         celsius:(farenheit - 32) * (5 / 9)
     }
 }
 console.log(convertTemp(32))
  