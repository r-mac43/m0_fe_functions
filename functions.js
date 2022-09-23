// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
  console.log("Hi! Welcome to Turing!");
}
  printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function booksToRead(genre) {
  console.log(`This afternoon I will read a ${genre} book.`);
}
  booksToRead("Western");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
//

// I tried this a few time and was able to able to get this to print the company name or
// write a separate code for the range, but not all three.
//
function companyPay(companyName, first, second) {
  var diff = (first - second);

  console.log(`Wow, with ${companyName} being such a delicious name for a company, no wonder the pay range is ${diff}!`);
 }
companyPay("Moonpies", 110000, 90000);

// 4: Write a function that satifies the following interaction pattern:

//  I tried multiple ways to figure this one out to satisfy the two Parameters
// in your example, but I could not get it to run.

function checkStock(item, amount) {
   if (amount >= 4) {
      console.log(`${item} is stocked`)

   }
      else if (amount <= 3 && amount >= 1) {
    console.log(`${item} - running LOW`)

    }
      else if (amount <= 0) {
    console.log(`${item} - OUT of stock`)
    }
  }

 checkStock("Coffee", 4);
 checkStock("Tortillas", 1);
 checkStock("Cheese", 0);
 checkStock("Salsa", 3);



checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
