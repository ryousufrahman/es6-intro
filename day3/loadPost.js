const loadpost =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(allpost=> allpost.json())
    .then(data =>display(data) )
}
 
       
const display =(posts)=>{
    const postcontainer =document.getElementById('post-container')
     postcontainer.innerHTML=''
    posts.forEach(element => {
      
        const div =document.createElement('div')
        div.innerHTML= `
         <div class="post">
            <h2>${element.title}</h2>
            <p>${element.body}</p>

        </div>
        
        `
        postcontainer.appendChild(div);
        
        
    });

}
loadpost();