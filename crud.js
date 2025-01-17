

let fetchData=async()=>{

    let url='http://localhost:3000/flight'
    let res=await fetch(url,{method:"GET"})

    let data=await res.json()
    console.log(data);
    
    let show=document.querySelector("#display")
    data.map((e)=>{

        show.innerHTML+=`
        
        <tr>
        
         <td>${e.name}</td>
          <td>${e.age}</td>
           <td>${e.number}</td>
            <td>${e.place}</td>
             <td>${e.visit}</td>
              <td>${e.price}</td>
              <td>${e.people}</td>
              <td>${e.price*e.people}</td>
              <td onclick="del('${e.id}')">Cancel</td>
       
        

        </tr>
        `
    })


}



let del=(id)=>{

    let urls=`http://localhost:3000/flight/${id}`

    fetch(urls,{method:"DELETE"})
}