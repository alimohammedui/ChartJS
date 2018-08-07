// // const book1={
// //   title: "Harry potter",
// //   author: "JK Rowling",
// //   year: '2002',
// //   getSummary: function(){
// //     return `${this.title} was written by ${this.author} in the year ${this.year}`;
// //   }
// // }
// // const book2={
// //   title: "GOT",
// //   author: "RR Martin",
// //   year: '2009',
// //   getSummary: function(){
// //     return `${this.title} was written by ${this.author} in the year ${this.year}`;
// //   }
// // }
// //
// // console.log(book1.getSummary());
// // console.log(book2.getSummary());
//
//
// function book (title, author, year){
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//
//   book.prototype.getSummary = function(){
//      return `${this.title} was written by ${this.author} in the year ${this.year}`;
//   };
//
// book.prototype.getAge = function(){
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// }
//
// book.prototype.revise = function(newYear){
//    this.year = newYear;
//    this.revised =true;
// }
//
// const book1 = new book('Harry potter', 'JK Rowling', '2002');
// const book2 = new book('GOT', 'RR MArtin', '2009');
//
// console.log(book1.getAge());
// console.log(book2.getAge());


var body=document.querySelector('body');
var isBlue = false;

setInterval (function(){
  if (isBlue){
    body.Style.background = 'white';
  } else {
    body.Style.background = 'blue'
  }
  isBlue = !isBlue
}, 1000);
