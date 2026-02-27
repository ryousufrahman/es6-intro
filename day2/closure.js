function outerFuntion() {
    function innerFuntion() {
        console.log('this is the inner funtion');
        
        
    }
    return innerFuntion
    
}
// we can return inner funtion but cannot access from outside
const outer = outerFuntion()
//  console.log(outer); 
// outer()

function counter() {
    let count =0
    function showCount() {
        count = count +1
        console.log('this is the outer variable we can access from inner funtion', count);
        
        
    }
    return showCount
    
}
 const output = counter();
 output()
 output()
 output()
 output()
 output()
 output()
 output()
//  if we change the value inside the inner funtion it store that funtion 

// but if we set a parameter that will set value differently for each parameter 'NEED TO RESEARCH LATER FOR CHAT'