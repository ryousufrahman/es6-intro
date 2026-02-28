function print() {
    let text = 'this is the for each method';
    return text
    
}

let arr =[1,2,3,4,5]

arr.forEach(x => {
   if(x%2===0) {
    console.log(print(), x)}})
// it do a specific task for each items of an array it may be used for printing or generating dom


const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});

// difference between for each and for loop