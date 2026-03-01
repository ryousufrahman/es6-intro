const loadpost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(allpost=> allpost.json())
    .then(data =>display(data) )
}

const display =(posts)=>{
    posts.forEach(element => {
        console.log(element)
        
    });

}