

let fetchData=async()=>{

let url='http://localhost:3000/Flight'
let response=await fetch(url,{method:"GET"})

let data=await response.json()
console.log(data);


// let show=document.querySelector("#display")
//  data.map((e)=>{

// show.innerHTML+=`

// <tr>

// <td>${e.name}</td>
// <td>${e.age}</td>
// <td>${e.number}</td>
// <td>${e.place}</td>
// <td>${e.visit}</td>
// <td>${e.price}</td>


// </tr>
// `
//  })
}