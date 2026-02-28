let friends =['rahim', 'Rakib', 'raj', 'monir', 'rohan','sagor']

let fr = friends.filter(item =>{
    if(item.toLocaleLowerCase().startsWith('ra')){
        return item
    }
    
})
console.log(fr);



// filter filter out the the array by our rules and return a new array of our desire