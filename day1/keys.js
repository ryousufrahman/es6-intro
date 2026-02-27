const details ={name: 'yousuf', education : 'hsc', age : 21 }
const keys =Object.keys(details);
const values =Object.values(details);
// console.log(keys, values)
// to get result is pairs of keys and values we can use entries 
// it will return array of array
const entries =Object.entries(details);
// console.log(entries[0]) 

// if we use freeze property we cannot modify change,add, delete the object 

const des ={name: 'yousuf', education : 'hsc', age : 21 }
Object.freeze(des)
delete des.name;
// this delete wont work
console.log(des);

// using seel we can modify the object but cannot add or delete

const des2 ={name: 'yousuf', education : 'hsc', age : 21 }
Object.seal(des2)

des2.name="rahman";
console.log(des2)
