

let fetchData=async()=>{

let url='http://localhost:3000/Flight'
let response=await fetch(url,{method:"GET"})

let data=await response.json()
console.log(data);



}