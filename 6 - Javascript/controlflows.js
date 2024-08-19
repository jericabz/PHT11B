// Control Flow Structures
// 1. Conditional Statements - execute blocks of code based on a condition
// Conditional: if, else if, else statements
// () - condition block
// {} - code block
let temperature = 19;
if(temperature < 0){
    // Group of statements
    console.log ("It's freezing.")
} else if (temperature >= 0 && temperature <20){
    console.log("It's cool outside.")
} else if (temperature >= 20 && temperature < 30){
    console.log("It's warm outside.")
} else {
    console.log("It's hot outside.")
}

// Conditional: switch-case statements
//  Use: Check for exact values
let day = "Monday"
switch(day){
    case "Monday":
        console.log("It's the start of the week.");
        break;
    case "Friday":
        console.log("It's the end of the week.");
        break;
    default:
        console.log("It's a regular day.")
}

// 2. Looping Statements - used to repeatedly execute codes
// loops: for loop
/*
    1st argument: variable initialization
    2nd argument: condition expression
    3rd argument: increment / decrement
*/
for(let i=1; i<=3; i++){
    console.log("for loop count:", i)
}

// loops: while loop
let count = 1;
while(count<=3){ 
    count++;
    console.log("while loop count:", count);
    
}

// loops: do-while loop
let counter = 5
do {
    console.log("do-while loop count:", counter);
    counter++
} while(counter<=3)

// Functions - allow us to write reusable block of codes
// Defining Functions
function greet() {
    console.log("Hello, welcome to the world of functions!")
    console.log("Yehey!")
}
// Calling Functions
greet();

// Parameters - variable/placeholder
// Arguments - values that will takeove the parameters
function sum(para1, para2){
    return para1 + para2
    console.log("Calculation done!")
}
// Calling Functions with Parameter
console.log("Sum:", sum(6, 9));