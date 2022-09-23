// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: Added semi colon outside of "Hello" string and nameQuestion function call
// to return output

function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();



// EX 2:Indented sum variable and console.log call and added semi-colon after parentheses
// Also aligned left closing curly bracket to improve template and readability
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Completed the word function, added space after paramenter variable,
// and moved closing curly bracket down to next line, so function will run.
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}


makeFreshPesto();


//  EX 4:Deleted opening curly bracket from above function definition, moved
// second opening curly bracket up one line of function definition.
// Indented both variables sum and average for readability.
// Capitalized "The", Moved the period inside the backtick.
// Move the closing curly bracket up one line and two the left.
// Added the function call "average with two number arguments, so the function
// would run.
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  console.log(sum);
  console.log(`The average is: ${avg}.`);
}

  average(8, 2);
