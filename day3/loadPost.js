const loadpost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(allpost=> allpost.json())
    .then(data =>display(data) )
}
 const ulcontainer =document.getElementById('ul-contianer')
const display =(posts)=>{
    posts.forEach(element => {
        
        const li =document.createElement('li')
        li.innerText = element.body
        ulcontainer.appendChild(li)
        
    });

}