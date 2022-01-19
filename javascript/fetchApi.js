
fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=>{
    return data.json();
})
.then((actualData)=>{
    console.log(actualData);
})
.catch((error)=>{
    console.log(error);
})
