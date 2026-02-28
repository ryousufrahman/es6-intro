const numbers = [2,4,6,8,10];
let doubled = numbers.map(num => { return num*2})
//  it creates a new array however we want from the origial array but do not change the original array
console.log(doubled) 
console.log(numbers);


// Extract one property from object

let students = [
    {name: "Ali", age: 18},
    {name: "Sara", age: 22},
    {name: "John", age: 19}
];

let studentName = students.map(name =>{
    return name.name
})
console.log(studentName);

// Using Index

let fruits =['apple','orange', 'mango','banana'];

let indexOfFruit = fruits.map((fruit , index) =>{
    return index + ". " + fruit
})
console.log(indexOfFruit)