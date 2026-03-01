const loadData =()=>{
   fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then((obj)=> obj.json())
   .then((data)=> console.log(data))

}