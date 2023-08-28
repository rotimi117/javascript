var id = "12345";
var available = "true";
var count = "5";
var name = "Javascript Book";
var author = "Rotimi nicol";

var book = {};

book.id = parseInt(id);
book.available = (available === "true");
book.count = parseInt(count);
book.name = name;
book.author = author;

console.log(book.id);          
console.log(book.available);   
console.log(book.count); 
console.log(book.name);     
console.log(book.author);
