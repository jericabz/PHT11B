
// Creating an array
let fruits = ['apple', 'banana', 'orange', 'mango']
console.log('First fruit:', fruits[0]);
console.log('Second fruit', fruits[1]);
console.log('Last fruit', fruits[fruits.length - 1]);
// modifying arrays elements
fruits[2] = 'grape';
fruits.push('strawbrry');
fruits.pop();
console.log('Modified array:', fruits);
// Array iteration with for loop
let numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}
// Common array methods

// Length
console.log('Array length', numbers.length);
// indexOf
console.log('index of 3', numbers.indexOf(3));
// includes
console.log('Includes 5:', numbers.includes(5));
// join
console.log ('Joined arrays: ', numbers.join('-'));
// slice 
let slicedArray = numbers.slice(1, 4);
console.log('Sliced array:', slicedArray);
// splice
let removedElements = numbers.splice(2,2);
console.log('Removed elemets:', removedElements);
console.log('Update array: ', numbers);

//Creating an object 
// Step 1: Create an object literal representing a person
const person = {
    firstname: 'Jericho',
    lastName: 'Cabaguing',
    age: 25,
    hobbies: ['reading', 'coding', 'cooking'],
    greet: function() {
        console.log(`Hello, my nameis ${this.firstname} ${this.lastName}. Nice to meet you!`);
    },
    };
    const person2 = {
        firstname: 'Mark',
        lastName: 'panes',
        age: 18,
        hobbies: ['reading', 'coding', 'cooking'],
        
        greet: function() {
            console.log(`Hello, my nameis ${this.firstname} ${this.lastName}. Nice to meet you!`);
        },
        };
    
        
    console.log(person.firstname);
    console.log(person.lastName);
    person.greet();
    console.log(person2.firstname);
    console.log(person2.lastName);
    person.greet();