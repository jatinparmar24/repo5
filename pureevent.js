
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

    let show=document.querySelector("#wert")
    show.innerHTML=werte.value
})

let show=document.querySelector("#red")
show.addEventListener("click",()=>{
    let des=document.querySelector("#box")
    des.style.backgroundColor="red"
})

let show1=document.querySelector("#blue")
show1.addEventListener("click",()=>{
    let des=document.querySelector("#box")
    des.style.backgroundColor="blue"
})

let show2=document.querySelector("#yellow")
show2.addEventListener("click",()=>{
    let des=document.querySelector("#box")
    des.style.backgroundColor="yellow"
})


let show3=document.querySelector("#rees")
show3.addEventListener("click",()=>{
    let show4=document.querySelector("#seer")
    if(show4.style.display=="none"){
        show4.style.display="block"
    }
    else{
        show4.style.display="none";
        show3.innerHTML="Show"
    }
    


})
