// const product ={
//     name :'Apple',
//     price : 1200,
//     model : '17 pro max'
// }
// console.log(product.name);
//  we can set a variable to the keys of a object for quick access
// const name = product.name = 'Mac'
// const model = product.model ='M1'
// const price =product.price - 100
// console.log(name);
// console.log(price)
// console.log(product.name);

//  or we can set the object name as the values name to get the keys
//  if no value are set we can set default value
const {name  , model , price , camera ='12 mp'} ={
    name :'Apple',
    price : 1200,
    model : '17 pro max',
    camera : '48 MP'
}
// console.log(camera);


// array

 const numbers =[1,2,3,4,5,6]

const [a,b,c,d,e] =[2,4,6,8,10, 12]
// console.log(e);
const [height , weight] = numbers
console.log(height)

