

// let sett=()=>{

//     localStorage.setItem("Name","Jatin")
     
//     localStorage.setItem("Age",23)
// }


//  let show=document.querySelector("#show")
//  let ans=localStorage.getItem("Name")
//  show.innerHTML=ans;


// let rem=()=>{
//    // localStorage.removeItem("Name")   // to remove key value
//    localStorage.clear();  // to remove all key value
// }

 let seet=()=>{
    let inpname=document.querySelector("#name").value
    let inpage=document.querySelector("#age").value

    localStorage.setItem("Name",inpname)
    localStorage.setItem("Age",inpage)

    location.reload()               // it auto refresh
    // location.href="BOM.html"
 }

 let show=document.querySelector("#dis")
 let name=localStorage.getItem("Name")
 let age=localStorage.getItem("Age")

 show.innerHTML=`Hello ${name} and you are ${age} year old`