
let btn=document.querySelector("#btn1")

btn.addEventListener("click",()=>{      // use doubleclick so write dblclick in place of click

    alert("btn clicked")          // to write on button we use  btn.innerHTML="disabled"
                                   // console.log("clicked")  it clicks how may times u click on the botton
                //============     // btn.disabled=true     now we can use that button only once =======
})

//let inp=document.querySelector("#inp")

//inp.addEventListener("keydown",(e)=>{      // we can use anything in place of e  btn we use e beacuse it is called event

 //   console.log(e.key)
// })

let inp=document.querySelector("#inp")

inp.addEventListener("input",()=>{
    console.log(inp.value)
})

let werte=document.querySelector("#tire")

werte.addEventListener("input",()=>{

    let show=document.querySelector("wert")
    wert.innerHTML=tire.value
})